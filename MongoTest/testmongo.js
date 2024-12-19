var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,client=>{
    console.log("connected");
    client.close();
});