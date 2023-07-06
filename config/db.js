// const mongoose = require('mongoose');

// // MongoDB Atlas connection URL
// const mongoURI = process.env.NEXT_PUBLIC_DB_URI
// //'your-mongodb-atlas-connection-uri';

// // Connect to MongoDB Atlas
// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   });

import mongoose from "mongoose";

const dbConnect = () => {
    console.log("Connecting mongoDB")
    if (mongoose.connection.readyState >= 1) return Promise.resolve();
    mongoose.connect("mongodb+srv://jassification:Satoshi%402030@cluster0.xk5izqu.mongodb.net/nutrigenius");//process.env.NEXT_PUBLIC_MONGODB_URI);
};

export default dbConnect;