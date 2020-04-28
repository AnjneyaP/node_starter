/* jshint node: true */
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.send('Hello my nodeman test');

});

app.listen(port, () => {

    console.log("App is runnung on " + port);

});