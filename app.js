const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res) => {
    res.send("Welcome to websocket client");
});

app.listen(PORT, err => {
    if(err){
        return console.error(err.stack);
    }
    console.info(`Websocket client deployed on : ${PORT}`);
});