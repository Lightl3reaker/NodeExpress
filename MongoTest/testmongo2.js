const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbName = 'EmployeeDB';

MongoClient.connect(url)
  .then(client => {
    console.log('Connected successfully to MongoDB');
    const db = client.db(dbName);
    
    // List collections
    db.listCollections().toArray()
      .then((collections) => {
        console.log('Collections:', collections);
      })
      .catch((err) => {
        console.error('Error fetching collections:', err);
      })
      .finally(() => {
        client.close();
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


