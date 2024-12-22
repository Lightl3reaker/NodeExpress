var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

app.route('/Employeeid').get((req, res) => {
    MongoClient.connect(url)
        .then(client => {
            const db = client.db("EmployeeDB");
            const collection = db.collection('Employee');
            
            // Use find() to get the cursor and then convert it to an array.
            collection.find().toArray()
                .then(items => {
                    let employeeIds = items.map(item => "Name: " + item.name).join(", ");
                    res.send(employeeIds); // Send the concatenated employee IDs as the response.
                    client.close();
                })
                .catch(err => {
                    console.error("Error fetching data:", err);
                    res.status(500).send("Error fetching data.");
                });
        })
        .catch(err => {
            console.error("Error connecting to MongoDB:", err);
            res.status(500).send("Error connecting to database.");
        });
});

var server = app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
