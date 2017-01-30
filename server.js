'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');

// Invoking the express, a web application framework for Node.js
// Localhost 3000 || other ports stated
const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

// The express library uses the morgan dependency and outputs default data to the terminal
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(bodyParser.json());

// Routes Folder List Below
// Here -

app.listen(PORT, () => console.log('yesss, server listenin ;)', PORT));
