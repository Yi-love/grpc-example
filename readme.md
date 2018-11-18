# grpc example
grpc example for use golang and node.js.


## 1. Install

```
brew install protoc
go get github.com/golang/protobuf/protoc-gen-go
go get google.golang.org/grpc
npm install
```


## 2. Compile

```
protoc --proto_path=. --go_out=plugins=grpc:. helloworld.proto
```

## 3. Run

### 3.1 server

```
go run greeter/server.go
```

### 3.2 client

```
go run greeter/client.go
```

or

```
node greeter/client-node.js
```

## 4. Output
`hello world`.