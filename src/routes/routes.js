import { Router } from "express";
import sondasController from '../controllers/sondas.controller.js';
const router = Router();

//POST
router.post('/api/v1/createSonda',sondasController.createSondas);
//GET
router.get('/api/v1/Sondas', sondasController.getAllSondas);
//GET BY ID
router.get('/api/v1/Sondas/:id', sondasController.getSondasById);





export default router;