import { DataTypes } from 'sequelize'; 
import dayjs from 'dayjs';
import sequelize from '../config/db.js';

const ImplantItem = sequelize.define('ImplantItem', {
    implantName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // code: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
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
        
        get() { 
            const date = this.getDataValue('addedAt');
            return date ? dayjs(date).format('DD.MM.YY') : null;
        }
    },
    usedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,

        get() { 
            const date = this.getDataValue('usedAt');
            return date ? dayjs(date).format('DD.MM.YY') : null;
        }
    },
},
{
    freezeTableName: true, 
    timestamps: false,

});

// Adds 'usedAt' date when entering implants manually
ImplantItem.beforeCreate(item => {
    if(item.status === 'Used' && !item.usedAt) {
        item.usedAt = new Date();
    }
})

// Hook: if 'status' changes from 'new' => 'used' 
ImplantItem.beforeUpdate(item => {
    if(item.changed('status') && item.status === 'used' && !item.usedAt)
        item.usedAt = new Date();
})

export default ImplantItem;