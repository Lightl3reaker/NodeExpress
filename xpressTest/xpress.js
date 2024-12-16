var express=require('express');
var app=express();
app.route('/Node').get((req,res)=>{
    res.send("Node Tutorial.")
});
app.get('/',(req,res)=>{
    res.send('Hello World');
});

var server=app.listen(3000,()=>{});