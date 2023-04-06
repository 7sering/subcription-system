import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Database Connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DATABASE);
  console.log("Database Connection Successful......");
}

//Middleware

//Autoload Routes

//Listen Server
app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
