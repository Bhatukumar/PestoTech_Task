const express = require("express");
const { connectToDatabase} = require("./database/db");

const app = express();
const PORT = 4000;

app.use(express.json());


connectToDatabase();

app.listen(PORT,() =>{
    console.log(`Now I can Here you On port ${PORT}`)
})