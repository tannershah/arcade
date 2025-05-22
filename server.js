const express = require('express');
const app = express();
const path = require("path");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/phaser.min.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/node_modules/phaser/dist/phaser.min.js');
});

app.get('/pong.html', (req, res) => {
  res.sendFile(__dirname + '/pong.html');
});

app.get('/script.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.sendFile(__dirname + '/script.js');
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
