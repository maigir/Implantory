import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
        },
    },
    logging: false
});

export default sequelize;

