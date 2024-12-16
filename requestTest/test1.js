var request=require('request');
request("http://www.google.com",(error,res,body)=>{
    console.log(body);
});