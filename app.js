const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, 'data.json');

const mongoUrl = 'mongodb://localhost:27017'; // Update with your MongoDB connection string
const dbName = 'stories'; // Update with your database name

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
let db;

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(dbName);
    })
    .catch(error => console.error('Error connecting to MongoDB:', error));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, story } = req.body;

    try {
        const collection = db.collection('stories');
        collection.insertOne({ name, story });

        res.redirect('/');
    } catch (error) {
        console.error('Error submitting story:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/stories', (req, res) => {
    try {
        const collection = db.collection('stories');
        collection.find({}).toArray((err, data) => {
            if (err) {
                console.error('Error fetching stories:', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.json(data);
            }
        });
    } catch (error) {
        console.error('Error fetching stories:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
