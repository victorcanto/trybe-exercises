const plantsModel = require('../../models/plants');

const getPlants = (req, res) => {
  try {
    const plants = plantsModel.getPlants();
    res.send(plants);
  } catch (err) {
    console.error(err);
  }
};

const getPlantById = (req, res) => {
  try {
    const { id } = req.params;
    const plant = plantsModel.getPlantById(id);
    res.send(plant);
  } catch (err) {
    console.error(err);
  }
};

const removePlantById = (req, res) => {
  try {
    const { id } = req.params;
    const plant = plantsModel.removePlantById(id);
    res.send(plant);
  } catch (err) {
    console.error(err);
  }
};

const editPlant = (req, res) => {
  try {
    const { id } = req.params;
    const newPlant = req.body.plant;
    const plant = plantsModel.editPlant(id, newPlant);
    res.send(plant);
  } catch (err) {
    console.error(err);
  }
};

const createNewPlant = (req, res) => {
  try {
    const newPlant = req.body.plant;
    const plant = plantsModel.createNewPlant(id, newPlant);
    res.send(plant);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  createNewPlant,
  editPlant,
};
