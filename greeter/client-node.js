const path = require('path');
const grpc = require('grpc');
protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(__dirname , '../helloworld/helloworld.proto');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var client = new helloProto.Greeter('localhost:50051',
                                       grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello({name: user}, function(err, response) {
    console.log('Greeting:', response.message);
  });
}

main();
