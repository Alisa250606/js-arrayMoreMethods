function getMostFuelEfficientCars(cars, brand) {
  
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].fuelConsumption >= 6) {
      return []; 
    }
  }

  const filteredCars = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].brand === brand) {
      filteredCars.push(cars[i]);
    }
  }

  filteredCars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);

  return filteredCars; 
}

module.exports = getMostFuelEfficientCars;
