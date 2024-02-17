import express from "express";
import { deleteCar, getCarById, getCars, saveCar, updateCar } from "../controllers/CarsController.js";

const router = express.Router()

router.get('/cars', getCars)
router.get('/cars/:id', getCarById)
router.post('/cars', saveCar)
router.patch('/cars/:id', updateCar)
router.delete('/cars/:id', deleteCar)

export default router