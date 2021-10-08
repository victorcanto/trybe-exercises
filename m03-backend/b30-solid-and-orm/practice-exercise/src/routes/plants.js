const { Router } = require('express');
const router = Router();

const plantsController = require('../controllers/plants');

router.get('/plants', plantsController.getPlants);

router.get('/plant/:id', plantsController.getPlantById);

router.delete('/plant/:id', plantsController.removePlantById);

router.post('/plant/:id', plantsController.editPlant);

router.post('/plant', plantsController.createNewPlant);

router.get('/sunny/:id', plantsController.getPlantById);

module.exports = router;
