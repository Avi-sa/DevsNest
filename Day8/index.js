const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log("In first", req.query);
    if (req.query.admin == true) {
        next();
    } else {
        res.status(400).send("should be a admin");
    }
}, (req, res) => {
    res.status(200);
    res.json(req.query);
})


app.listen(5000);

