const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const urls = require('./app/shortenUrl');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/urls', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/', urls);


app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});