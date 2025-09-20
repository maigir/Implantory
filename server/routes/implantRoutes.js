import express from 'express';
import implantItemController from '../controllers/ImplantItemController.js';

const router = express.Router();

router
    .route('/')
    .get(implantItemController.getAllImplants, implantItemController.getOneImplant)
    .post(implantItemController.createImplant);

export default router;