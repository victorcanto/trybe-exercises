const { defaultPlants } = require('../../data');

let createdPlants = defaultPlants.length;

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
};

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => defaultPlants;

const needsSun = (plant) => !!plant.needsSun;

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  defaultPlants = defaultPlants.filter((plant) => plant.id !== id);
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.filter((plant) => {
    return needsSun(plant) && plant.id === id;
  });
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    return plant.id === plantId ? newPlant : plant;
  });
};

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  getPlants,
  getPlantById,
  getPlantsThatNeedsSunWithId,
  createNewPlant,
  editPlant,
  removePlantById,
};
