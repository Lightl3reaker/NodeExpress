const {MongoClient} = require('mongodb');

async function deleteDoc(){
    let client;
    try{
        
        const url="mongodb://localhost:27017";
        const dbName="EmployeeDB";
        client= await MongoClient.connect(url);
        const db=client.db(dbName);
        const collection=db.collection("Employee");
        const result=await collection.deleteOne({
            name : "Bob Johnson"
        });
        if(result.deletedCount == 1){
            console.log("Delected successfully.");
        }else{
            console.log("Error deleting doc.")
        }
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
        console.log("Mongodb closed.");
    }
}
deleteDoc();