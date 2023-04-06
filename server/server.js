const express = require("express");
const mongoose =  require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

const morgan = require("morgan");
const { expressjwt } = require("express-jwt");
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
app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

//Routes
app.get("/api/register", (req, res) => {
  res.send("API Requested Sand Success ........");
});

//Listen Server
app.listen(port, () => {
  console.log(`Server started successfully on port ${port}`);
});
