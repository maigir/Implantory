import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
console.log('DATABASE_URL:', process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    logging: false
});

export default sequelize;

