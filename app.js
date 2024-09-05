const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // Assuming your HTML and CSS files are in the 'public' folder

const mongoUri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/submit', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    try {
        await client.connect();
        const db = client.db('contact_form');
        const collection = db.collection('submissions');
        const result = await collection.insertOne({ name, email, message });

        if (result.insertedCount === 1) {
            console.log('Form submitted and data inserted into MongoDB');
            res.send('Form submitted successfully');
        } else {
            console.error('Error submitting the form');
            res.send('Error submitting the form');
        }
    } catch (error) {
        console.error('Error connecting to the database', error);
        res.status(500).send('Internal server error');
    } finally {
        client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
document.addEventListener("DOMContentLoaded", function () {
    // ... your existing tab code ... //

    const toggleButton = document.getElementById('night-mode-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Update Icon
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Check user preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
