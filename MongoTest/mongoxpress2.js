const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const url = 'mongodb://localhost:27017/';

app.route('/Employeeid').get(async (req, res) => {
    let client;
    try {
        // Connect to the MongoDB server
        client = await MongoClient.connect(url);
        
        // Access the database and collection
        const db = client.db("EmployeeDB");
        const collection = db.collection('Employee');
        
        // Use find() to get all documents and convert the cursor to an array
        const items = await collection.find().toArray();
        
        // Map the items to a string containing employee names
        const employeeNames = items.map(item => `Name: ${item.name}`).join(", ");
        
        // Send the result back as the response
        res.send(employeeNames);
        
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error fetching data.");
    } finally {
        // Ensure the MongoDB client is closed after the operation
        if (client) {
            client.close();
        }
    }
});

const server = app.listen(3000, function () {
    console.log('Server running on http://localhost:3000');
});
