require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db= mongoose.connection;
db.on('error', (error) => {console.log(error)});
db.once('open', () => console.log("Connesso al database"));

server.use(express.json());
server.use(cors());

const router = require('./characters');
server.use('/characters', router);

server.listen(3000, () => console.log("Server online!"));


