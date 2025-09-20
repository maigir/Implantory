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
            status: 'New implant successfully added!',
            message: newImplant,
        });
    } catch (err) {
        res.status(500).json({
            status: 'Error!',
            message: err.message
        })
    }
}

const getAllImplants = async (req, res) => {
    try {
        const allImplants = await implant.findAll();

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

export default {createImplant, getAllImplants};

