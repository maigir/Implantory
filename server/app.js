import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config({quiet: true});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('API is running');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
