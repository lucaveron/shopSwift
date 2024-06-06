// // //200.114.231.119

// const dotenv = require("dotenv");

// dotenv.config({ path: "backend/config/config.env" });

// const user = process.env.DB_USER;
// const password = process.env.DB_PASS;

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = `mongodb+srv://${user}:${password}@shopswift.raif1ga.mongodb.net/?retryWrites=true&w=majority&appName=shopswift`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function dbConnection() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

// async function dbDisconnect() {
//   try {
//     await client.close();
//     console.log("Disconnected from MongoDB!");
//   } catch (error) {
//     console.error("Error disconnecting from MongoDB:", error);
//     throw error;
//   }
// }

// module.exports = { client, dbConnection, dbDisconnect };
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

const user = process.env.DB_USER;
const password = process.env.DB_PASS;

const uri = `mongodb+srv://${user}:${password}@shopswift.raif1ga.mongodb.net/?retryWrites=true&w=majority&appName=shopswift`;

const connectDb = () => {
  mongoose
    .connect(uri, { dbName: "shopswift" })
    .then((con) =>
      console.log("Connected to MongoDB in " + con.connection.host)
    )
    .catch((err) => console.error("Could not connect to MongoDB", err));
};

module.exports = connectDb;
