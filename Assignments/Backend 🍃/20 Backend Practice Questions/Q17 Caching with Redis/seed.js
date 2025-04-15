
// seed.js
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM-compatible way to handle __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the Product model
import productModel from "./models/productModel.js";

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
  
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Read and parse JSON
const products = JSON.parse(fs.readFileSync(path.join(__dirname, "products.json"), "utf-8"));

// Insert data
// const importData = async () => {
//   try {
   
//     await productModel.insertMany(products);
//     console.log("✅ Data Imported!");
 
//   } catch (error) {
//     console.error("❌ Error inserting data:", error);
  
//   }
// };

// importData();
