import express from 'express';
import implantController from '../controllers/implantController.js';

const router = express.Router();

router
    .route('/')
    .post(implantController.createImplant);

router
    .route('/new')
    .get(implantController.getAllNewImplants)

export default router;