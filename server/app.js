import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import implantRouter from './routes/implantRoutes.js';

dotenv.config({quiet: true});

const app = express();
app.use(express.json());

app.use(cors({ origin: [/*'http://localhost:5173'*/
    'https://implantory.vercel.app'
]})); 

app.use(morgan('dev'));

try {
    await sequelize.authenticate();
    console.log('Database successfully connected!')
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

try {
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
} catch (error) {
    console.error('Error synchronizing models:', error);
}

app.use('/api/implants', implantRouter);

app.use((req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

app.get('/', (req, res) => {
    res.status(200).send('API is running');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
