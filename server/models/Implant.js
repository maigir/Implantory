import { DataTypes } from "sequelize"; 
import sequelize from "../config/db.js";

const ImplantItem = sequelize.define('ImplantItem', {
    implantName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    diameter: {
        type: DataTypes.DECIMAL(3, 2), 
        allowNull: false,
    },
    length: {
        type: DataTypes.INTEGER, 
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
        defaultValue: DataTypes.NOW,
    },
    usedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
},
{
    freezeTableName: true, 
    timestamps: false,
});

export default ImplantItem;