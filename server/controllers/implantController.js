import implant from '../models/Implant.js';

const createImplant = async (req, res) => {
    try {
        const newImplant = await implant.create({
        implantName: req.body.implantName,
        diameter: req.body.diameter,
        length: req.body.length,
        REF: req.body.REF,
        LOT: req.body.LOT,
    });
    res.status(200).json({
            status: 'Success!',
            message: 'New implant successfully added!',
            data: newImplant,
        });
    } catch (err) {
        res.status(500).json({
            status: 'Error!',
            message: err.message
        })
    }
}

const getAllNewImplants = async (req, res) => {
    try {
        const allImplants = await implant.findAll({
            where: {status: 'new'}
        });
        if(!allImplants) {
            return res.status(404).json({
                status: 'Error!',
                message: "No implants found!"
            })
        }

        res.status(200).json({
            status: 'Success!',
            products: allImplants.length,
            message: allImplants
        })
    } catch (err) {
        res.status(500).json({
            status: 'Error!',
            message: err.message
        })
    }
}

// .save() triggers hook
const updateImplant = async (req, res) => {
    try {
        const { id } = req.params;
        const implantItem = await implant.findByPk(id);

        if(!implantItem) {
            return res.status(404).json({
                status: 'Error!',
                message: 'Implant not found',
            });
        }

        Object.assign(implantItem, req.body);
        await implantItem.save() // triggers beforeUpdate hook

        res.status(200).json({
            status: 'Success!',
            message: "Implant successfully updated!",
            data: implantItem
        })
    } catch(err){
        res.status(500).json({
            status: 'Error!',
            message: err.message
        })
    }
}

const deleteImplant = async (req, res) => {
    try {
        const { id } = req.params;
        const implantItem = await implant.findByPk(id);

        if(!implantItem)  {
            return res.status(404).json({
                status: 'Error!',
                message: 'Implant not found!'
            });
        }

        await implantItem.destroy();

        res.status(200).json({
            status: 'Success!',
            message: `Implant with ID ${id} deleted!`
        })
    } catch(err){
        res.status(500).json({
            status: 'Error!',
            message: err.message
        })
    }
    
}

export default {createImplant, getAllNewImplants, updateImplant, deleteImplant};

