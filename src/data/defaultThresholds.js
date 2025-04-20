const cropThresholdData = {
  tomato: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 70 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 6.8 },
      lightThreshold: { min: 10000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 200 },
      phosphorusThreshold: { min: 15, max: 100 },
      potassiumThreshold: { min: 25, max: 180 }
    },
    flowering: {
      temperatureThreshold: { min: 22, max: 28 },
      humidityThreshold: { min: 50, max: 60 },
      soilMoistureThreshold: { min: 60, max: 70 },
      phThreshold: { min: 6.2, max: 6.8 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 40, max: 250 },
      phosphorusThreshold: { min: 30, max: 150 },
      potassiumThreshold: { min: 40, max: 200 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 26 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 6.8 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 30, max: 180 },
      phosphorusThreshold: { min: 20, max: 120 },
      potassiumThreshold: { min: 30, max: 160 }
    }
  },

  potato: {
    germination: {
      temperatureThreshold: { min: 15, max: 22 },
      humidityThreshold: { min: 70, max: 80 },
      soilMoistureThreshold: { min: 65, max: 80 },
      phThreshold: { min: 5.5, max: 6.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 60, max: 200 },
      phosphorusThreshold: { min: 30, max: 100 },
      potassiumThreshold: { min: 50, max: 200 }
    },
    flowering: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 60, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 5.5, max: 6.8 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 80, max: 220 },
      phosphorusThreshold: { min: 40, max: 120 },
      potassiumThreshold: { min: 60, max: 220 }
    },
    harvesting: {
      temperatureThreshold: { min: 14, max: 20 },
      humidityThreshold: { min: 50, max: 60 },
      soilMoistureThreshold: { min: 55, max: 70 },
      phThreshold: { min: 5.8, max: 6.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 40, max: 150 },
      phosphorusThreshold: { min: 30, max: 90 },
      potassiumThreshold: { min: 50, max: 180 }
    }
  },

  rice: {
    germination: {
      temperatureThreshold: { min: 20, max: 35 },
      humidityThreshold: { min: 70, max: 90 },
      soilMoistureThreshold: { min: 80, max: 100 },
      phThreshold: { min: 5.5, max: 6.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    tillering: {
      temperatureThreshold: { min: 25, max: 35 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 75, max: 95 },
      phThreshold: { min: 5.5, max: 6.5 },
      lightThreshold: { min: 18000, max: 28000 },
      nitrogenThreshold: { min: 60, max: 150 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 90 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 5.8, max: 6.5 },
      lightThreshold: { min: 15000, max: 22000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 70 }
    }
  },

  corn: {
    germination: {
      temperatureThreshold: { min: 18, max: 25 },
      humidityThreshold: { min: 60, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 5.8, max: 7.0 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 50, max: 150 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 100 }
    },
    vegetative: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 50, max: 65 },
      soilMoistureThreshold: { min: 55, max: 70 },
      phThreshold: { min: 5.8, max: 6.8 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 80, max: 180 },
      phosphorusThreshold: { min: 40, max: 100 },
      potassiumThreshold: { min: 50, max: 120 }
    },
    harvesting: {
      temperatureThreshold: { min: 18, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6.0, max: 6.8 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 100 }
    }
  },

  cotton: {
    germination: {
      temperatureThreshold: { min: 25, max: 32 },
      humidityThreshold: { min: 60, max: 75 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 5.8, max: 6.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 50, max: 100 },
      phosphorusThreshold: { min: 30, max: 60 },
      potassiumThreshold: { min: 40, max: 80 }
    },
    flowering: {
      temperatureThreshold: { min: 26, max: 34 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 5.8, max: 7.0 },
      lightThreshold: { min: 18000, max: 28000 },
      nitrogenThreshold: { min: 70, max: 130 },
      phosphorusThreshold: { min: 40, max: 80 },
      potassiumThreshold: { min: 50, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 24, max: 30 },
      humidityThreshold: { min: 45, max: 60 },
      soilMoistureThreshold: { min: 55, max: 70 },
      phThreshold: { min: 5.8, max: 6.8 },
      lightThreshold: { min: 15000, max: 22000 },
      nitrogenThreshold: { min: 40, max: 90 },
      phosphorusThreshold: { min: 30, max: 60 },
      potassiumThreshold: { min: 40, max: 90 }
    }
  }
};

export default cropThresholdData;

