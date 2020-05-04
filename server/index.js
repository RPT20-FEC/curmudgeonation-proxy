const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// default route handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../public/not_found.html'));
});

// GET listing page
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '../public/index.html'));
});

module.exports = app;