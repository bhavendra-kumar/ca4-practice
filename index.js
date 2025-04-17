const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


// Async function just for DB connection
const db = async()=>{
  try{
  await mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("DB connected"))
  }catch(e){
    console.log('error',e)
  }
}

db();

const master = require('./routers')
app.use('/routers',master)

// Define routes
app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
