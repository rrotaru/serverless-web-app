const express = require('express');

var app = express();

const port = 8080
app.get('/',(req,res) => {
    res.send('CODE A THON!');
})

app.listen(port, () => {
    console.log("running on port " + port);
})