const cropThresholdData = {
  // Existing crops: tomato, potato, rice, corn, cotton

  wheat: {
    germination: {
      temperatureThreshold: { min: 12, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    tillering: {
      temperatureThreshold: { min: 15, max: 22 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  maize: {
    germination: {
      temperatureThreshold: { min: 18, max: 25 },
      humidityThreshold: { min: 60, max: 75 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 5.8, max: 7.0 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 60, max: 150 },
      phosphorusThreshold: { min: 30, max: 60 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    vegetative: {
      temperatureThreshold: { min: 20, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 5.8, max: 7.0 },
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

  chickpea: {
    germination: {
      temperatureThreshold: { min: 15, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 18, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  lentil: {
    germination: {
      temperatureThreshold: { min: 10, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 9000, max: 18000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 15, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 9000, max: 15000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },
  moong: {
    germination: {
      temperatureThreshold: { min: 20, max: 35 },           // Optimal 25–35°C[2][4]
      humidityThreshold: { min: 60, max: 80 },              // Moderate to high humidity[5]
      soilMoistureThreshold: { min: 60, max: 80 },          // Moist, well-drained soil[1][2]
      phThreshold: { min: 6.3, max: 7.5 },                  // Slightly acidic to neutral[1][2]
      lightThreshold: { min: 10000, max: 18000 },           // Full sun, moderate intensity[5]
      nitrogenThreshold: { min: 20, max: 60 },              // Legume, lower N needs[5]
      phosphorusThreshold: { min: 20, max: 60 },            // Moderate P[5]
      potassiumThreshold: { min: 20, max: 60 }              // Moderate K[5]
    },
    flowering: {
      temperatureThreshold: { min: 27, max: 35 },           // Sensitive to heat stress >35°C[5]
      humidityThreshold: { min: 50, max: 70 },              // Adequate humidity needed[5]
      soilMoistureThreshold: { min: 60, max: 75 },          // Moisture crucial for pod set and fill[1]
      phThreshold: { min: 6.3, max: 7.5 },                  // Same as previous stages[1][2]
      lightThreshold: { min: 15000, max: 22000 },           // High light for flowering[5]
      nitrogenThreshold: { min: 30, max: 80 },              // Supports pod set and fill[5]
      phosphorusThreshold: { min: 30, max: 80 },            // Important for seed development[5]
      potassiumThreshold: { min: 30, max: 80 }              // Important for seed development[5]
    },
    vegetative: {
      temperatureThreshold: { min: 25, max: 35 },           // Growth maximized at 28–30°C[4][5]
      humidityThreshold: { min: 50, max: 70 },              // Lower than germination[5]
      soilMoistureThreshold: { min: 60, max: 75 },          // Consistent moisture, avoid waterlogging[1]
      phThreshold: { min: 6.3, max: 7.5 },                  // Same as germination[1][2]
      lightThreshold: { min: 12000, max: 20000 },           // Full sunlight[5]
      nitrogenThreshold: { min: 30, max: 80 },              // Slightly higher for vegetative growth[5]
      phosphorusThreshold: { min: 30, max: 80 },            // Moderate to high P[5]
      potassiumThreshold: { min: 30, max: 80 }              // Moderate to high K[5]
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 30 },           // Prefer cooler, dry weather[1][5]
      humidityThreshold: { min: 40, max: 60 },              // Lower humidity to avoid pod shattering[1]
      soilMoistureThreshold: { min: 50, max: 65 },          // Drier soil for harvest[1]
      phThreshold: { min: 6.3, max: 7.5 },                  // Same as above[1][2]
      lightThreshold: { min: 10000, max: 15000 },           // Moderate light[5]
      nitrogenThreshold: { min: 20, max: 60 },              // Reduced N at harvest[5]
      phosphorusThreshold: { min: 20, max: 60 },            // Reduced P at harvest[5]
      potassiumThreshold: { min: 20, max: 60 }              // Reduced K at harvest[5]
    }
  },
  mustard: {
    germination: {
      temperatureThreshold: { min: 10, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    flowering: {
      temperatureThreshold: { min: 15, max: 22 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  groundnut: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    pegging: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  sugarcane: {
    germination: {
      temperatureThreshold: { min: 20, max: 38 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 70, max: 90 },
      phThreshold: { min: 6.5, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 50, max: 150 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 120 }
    },
    grandGrowth: {
      temperatureThreshold: { min: 25, max: 35 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 70, max: 90 },
      phThreshold: { min: 6.5, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 80, max: 200 },
      phosphorusThreshold: { min: 40, max: 100 },
      potassiumThreshold: { min: 60, max: 140 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6.5, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 40, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 120 }
    }
  },

  jute: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 70, max: 90 },
      soilMoistureThreshold: { min: 70, max: 90 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    vegetative: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 70, max: 85 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  pea: {
    germination: {
      temperatureThreshold: { min: 10, max: 22 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 9000, max: 18000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 15, max: 25 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 9000, max: 15000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  sorghum: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    vegetative: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  pigeonpea: {
    germination: {
      temperatureThreshold: { min: 18, max: 28 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 20, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 18, max: 26 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  blackgram: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  greengram: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  sesame: {
    germination: {
      temperatureThreshold: { min: 20, max: 35 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 50, max: 70 },
      phThreshold: { min: 5.5, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 22, max: 38 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 5.5, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 40, max: 55 },
      phThreshold: { min: 5.5, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  sunflower: {
    germination: {
      temperatureThreshold: { min: 15, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    flowering: {
      temperatureThreshold: { min: 20, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 18, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  onion: {
    germination: {
      temperatureThreshold: { min: 12, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    bulbDevelopment: {
      temperatureThreshold: { min: 16, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  garlic: {
    germination: {
      temperatureThreshold: { min: 10, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 9000, max: 18000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    bulbDevelopment: {
      temperatureThreshold: { min: 15, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 9000, max: 15000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  brinjal: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    flowering: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },
  

  cabbage: {
    germination: {
      temperatureThreshold: { min: 12, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    headFormation: {
      temperatureThreshold: { min: 16, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  cauliflower: {
    germination: {
      temperatureThreshold: { min: 12, max: 25 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 18000 },
      nitrogenThreshold: { min: 40, max: 120 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    curdFormation: {
      temperatureThreshold: { min: 16, max: 28 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 60, max: 160 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 40, max: 100 }
    },
    harvesting: {
      temperatureThreshold: { min: 16, max: 24 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 10000, max: 15000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 30, max: 80 }
    }
  },

  pumpkin: {
    germination: {
      temperatureThreshold: { min: 20, max: 30 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 22, max: 32 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 20, max: 28 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  watermelon: {
    germination: {
      temperatureThreshold: { min: 20, max: 32 },
      humidityThreshold: { min: 60, max: 80 },
      soilMoistureThreshold: { min: 60, max: 80 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 80 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    },
    flowering: {
      temperatureThreshold: { min: 24, max: 36 },
      humidityThreshold: { min: 50, max: 70 },
      soilMoistureThreshold: { min: 60, max: 75 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 15000, max: 25000 },
      nitrogenThreshold: { min: 30, max: 100 },
      phosphorusThreshold: { min: 30, max: 80 },
      potassiumThreshold: { min: 30, max: 80 }
    },
    harvesting: {
      temperatureThreshold: { min: 22, max: 30 },
      humidityThreshold: { min: 40, max: 60 },
      soilMoistureThreshold: { min: 50, max: 65 },
      phThreshold: { min: 6, max: 7.5 },
      lightThreshold: { min: 12000, max: 20000 },
      nitrogenThreshold: { min: 20, max: 60 },
      phosphorusThreshold: { min: 20, max: 60 },
      potassiumThreshold: { min: 20, max: 60 }
    }
  },

  

  // Existing crops (tomato, potato, rice, corn, cotton) remain as in your original data

};

export default cropThresholdData;
