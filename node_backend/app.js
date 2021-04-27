const express = require('express');
const app = express();
const dummy_res = {
    result: "server is up"
};
app.use((req, res, next) => {
    res.send(dummy_res);
})
module.exports = app;