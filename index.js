const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const cats = require('./api/routes/cats');

require('dotenv').config();

const port = 3000;
const app = express();

// middlewares
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')))

app.use('/api/', cats);

  // handling 404 errors
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
});

// db connect
const uri = process.env.MONGO_CONNECT_URI;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// boot
app.listen(port, () => console.log(`Cat management system backend listening on port ${port}!`));

// close
process.on('uncaughtException', app.disable());
process.on('SIGTERM', app.disable());