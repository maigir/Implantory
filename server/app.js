import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import cors from 'cors';

dotenv.config({quiet: true});

const app = express();
app.use(express.json());

try {
    await sequelize.authenticate();
    console.log('Database successfully connected!')
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.get('/', (req, res) => {
    res.status(200).send('API is running');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
