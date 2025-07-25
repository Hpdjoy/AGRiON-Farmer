import React, { createContext, useState, useEffect, useContext } from 'react';
import { ref, onValue } from 'firebase/database';
import { rdb } from '../../firebase'; // Realtime DB

const SettingsDataContext = createContext();

export const SettingsDataProvider = ({ children }) => {
  const [settingsData, setSettingsData] = useState({
    cropType: '',
    deviceId: '',
    growthPhase: '',
    humidityThreshold: { min: 0, max: 0 },
    lightThreshold: { min: 0, max: 0 },
    location: '',
    monitoringMode: 'manual',
    phThreshold: { min: 0, max: 0 },
    temperatureThreshold: { min: 0, max: 0 },
    nitrogenThreshold: { min: 0, max: 0 },
    phosphorusThreshold: { min: 0, max: 0 },
    potassiumThreshold: { min: 0, max: 0 },
    soilMoistureThreshold: { min: 0, max: 0 },
  });

  useEffect(() => {
    const dbRef = ref(rdb, '/settings');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSettingsData({
          cropType: data.cropType || '',
          deviceId: data.deviceId || '',
          growthPhase: data.growthPhase || '',
          humidityThreshold: data.humidityThreshold || { min: 0, max: 100 },
          lightThreshold: data.lightThreshold || { min: 0, max: 3000 },
          location: data.location || '',
          monitoringMode: data.monitoringMode || 'manual',
          phThreshold: data.phThreshold ? { min: data.phThreshold.min || 5, max: data.phThreshold.max || 7 } : { min: 5, max: 7 },
          temperatureThreshold: data.temperatureThreshold ? { min: data.temperatureThreshold.min || 5, max: data.temperatureThreshold.max || 36 } : { min: 5, max: 36 },
          nitrogenThreshold: data.nitrogenThreshold ? { min: data.nitrogenThreshold.min || 1, max: data.nitrogenThreshold.max || 100 } : { min: 1, max: 100 },
          phosphorusThreshold: data.phosphorusThreshold ? { min: data.phosphorusThreshold.min || 1, max: data.phosphorusThreshold.max || 100 } : { min: 1, max: 100 },
          potassiumThreshold: data.potassiumThreshold ? { min: data.potassiumThreshold.min || 1, max: data.potassiumThreshold.max || 100 } : { min: 1, max: 100 },
          soilMoistureThreshold: data.soilMoistureThreshold ? { min: data.soilMoistureThreshold.min || 20, max: data.soilMoistureThreshold.max || 80 } : { min: 20, max: 80 },
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SettingsDataContext.Provider value={{ settingsData }}>
      {children}
    </SettingsDataContext.Provider>
  );
};

export const useSettingsData = () => useContext(SettingsDataContext);
export default SettingsDataContext;
