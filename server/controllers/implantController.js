import implant from '../models/implant.js';

const createImplant = async (req, res) => {
    try {
        const newImplant = await implant.create({
        implantName: req.body.implantName,
        diameter: req.body.diameter,
        length: req.body.length,
        REF: req.body.REF,
        LOT: req.body.LOT,
        status: req.body.status,
        // code: req.body.code
    });
    console.log(req.body);
    res.status(200).json({
            status: 'Success!',
            message: 'New implant successfully added!',
            data: newImplant,
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
}

const getAllImplants = async (req, res) => {
    try {
        const allImplants = await implant.findAll();
        const implants = allImplants.map(impl => impl.toJSON());

;        res.status(200).json({
            status: 'success',
            data: implants
        })
    } catch(err) {
        res.status(500).json({
            status: 'fail',
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
                status: 'fail',
                message: `Implant with ID ${id} not found`,
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
            status: 'fail',
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
                status: 'fail',
                message: `Implant with ID ${id} not found!`
            });
        }

        await implantItem.destroy();

        res.status(200).json({
            status: 'Success!',
            message: `Implant with ID ${id} deleted!`,
            data: implantItem
        })
    } catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
    
}

export default {createImplant, updateImplant, deleteImplant, getAllImplants};

