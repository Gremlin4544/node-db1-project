const express = require('express');

// const db = require('./data/dbConfig.js');

const AccountsRouter = require('../accounts/AccountsRouter')

const server = express();

server.use(express.json());
server.use('/api/accounts', AccountsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to the accounts API"});
});

module.exports = server;
