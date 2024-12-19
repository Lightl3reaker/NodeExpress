var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';
MongoClient.connect(url,(err,db)=>{
    console.log("connected");
    db.close();
});