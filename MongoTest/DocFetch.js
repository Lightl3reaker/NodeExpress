const { MongoClient } = require('mongodb');

async function fetchAllEmployees() {
  let client;

  try {
    // Define MongoDB URL and Database name
    const url = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection string
    const dbName = 'EmployeeDB'; // Replace with your database name

    // Connect to MongoDB
    client = await MongoClient.connect(url);
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('Employee'); // Access the Employee collection

    // Fetch all documents from the Employee collection
    const employees = await collection.find({}).toArray(); // `find({})` fetches all documents

    console.log('All Employees:', employees);

  } catch (err) {
    console.error('Error connecting to MongoDB or fetching data:', err);
  } finally {
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
}

fetchAllEmployees();
