var express=require('express');
var app=express();
app.set('view engine','jade');
app.get('/',(req,res)=>{
    res.render('index',
    {title:'TemplateTest',message:"Hello"})
});
var server=app.listen(3000,()=>{});