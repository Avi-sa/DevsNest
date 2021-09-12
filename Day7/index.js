const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ "a": 1 });
})

app.get('/check', (req, res) => {
    res.status(200).send("Check worked")
})

app.get('/query', (req, res) => {
    res.send(req.query);
})

app.get('/ab?cd', (req, res) => {
    res.send('abcd');
})


app.listen(5000);