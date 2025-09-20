import express from 'express';
import implantController from '../controllers/implantController.js';

const router = express.Router();

router
    .route('/')
    .get(implantController.getAllImplants)
    .post(implantController.createImplant);

export default router;