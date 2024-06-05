// Path: /pages/api/contact.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this environment variable is set
const client = new MongoClient(uri);

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, companyName, info } = req.body;

    if (!name || !info) {
      return res.status(400).json({ message: "Name and info are required" });
    }

    try {
      await client.connect();
      const database = client.db('portfolio');
      const collection = database.collection('contacts');

      const contact = { name, companyName, info, date: new Date() };
      await collection.insertOne(contact);

      return res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error connecting to the database:", error);
      return res.status(500).json({ message: "Internal server error" });
    } finally {
      await client.close();
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;
