const {MongoClient} = require('mongodb');

async function updateDoc(){
    let client;
    try{
        let url="mongodb://localhost:27017/";
        let dbName="EmployeeDB";
        client=await MongoClient.connect(url);
        console.log("Connected to db");

        const db=client.db(dbName);
        const collection=db.collection('Employee');

        const filter={ name : "Aung"};
        const update={
            $set : { age : 20 },
        };
        const result= await collection.updateOne(filter,update);
        if (result.modifiedCount === 1) {
            console.log('Document updated successfully');
          } else {
            console.log('No document found or updated');
          }

    }catch(err){ 
        console.error("Error connecting mongodb.");
    }finally{
        await client.close();
        console.log("Mongodb Closed.");
    }

}
updateDoc();