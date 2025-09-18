import { DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";

const ImplantItem = sequelize.define('Implant', {
    implantName: {
        type: DataTypes.STRING, //BLX, BLC, BLT
        allowNull: false,
    },
    diameter: {
        type: DataTypes.FLOAT, //3.5, 3.75, 4.0 jne.
        allowNull: false,
    },
    length: {
        type: DataTypes.INTEGER, //8, 10, 12, 14 jne.
        allowNull: false,
    },
    REF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LOT: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('new', 'used'),
        defaultValue: 'new',
        allowNull: false,
    },
    addedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    usedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    }

})

export default Implant;