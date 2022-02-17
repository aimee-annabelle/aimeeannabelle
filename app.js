const dotenv = require("dotenv");
dotenv.config({path:"./config/config.env"});
const path = require("path");
const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());


// importing routes
// const routes = require('./routes/routing.routes');


app.get("/",(req,res)=>{
    res.send({message:"Welcome to Electricity token seller"});
});
// app.use("/api/v1",routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT,console.log(`Server is running on port ${PORT} ...`))