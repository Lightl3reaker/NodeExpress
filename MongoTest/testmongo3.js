async function insertDocuments() {
    let client;
  
    try {
      // Connect to MongoDB
      client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected successfully to MongoDB');
  
      const db = client.db(dbName);
      const collection = db.collection('Employee'); // Access the Employee collection
  
      // Insert one document
      const insertResult = await collection.insertOne({
        name: "John Doe",
        age: 30,
        position: "Software Engineer",
        department: "Engineering",
        salary: 75000
      });
  
      console.log('Inserted document:', insertResult.ops);
  
      // Insert multiple documents
      const insertManyResult = await collection.insertMany([
        { name: "Alice Smith", age: 28, position: "Product Manager", department: "Product", salary: 85000 },
        { name: "Bob Johnson", age: 35, position: "HR Manager", department: "Human Resources", salary: 70000 }
      ]);
  
      console.log('Inserted multiple documents:', insertManyResult.ops);
    } catch (err) {
      console.error('Error connecting to MongoDB or inserting documents:', err);
    } finally {
      if (client) {
        await client.close();
        console.log('MongoDB connection closed');
      }
    }
  }
  
  // Run the insert function
  insertDocuments();
  