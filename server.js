/*
MEAN Stack
MongoDB - database
Express.JS - Library for connecting to databases
ANgular - frame work
NodeJS - Web server
*/
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
 
app.use(cors());//allows angular to communicate with the API
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})

const Pokemon = mongoose.model('Pokemon', {name: String, type: String, level: Number, nature: String });
app.post('/api/pokemon', async (req, res) => {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.send(pokemon);
})