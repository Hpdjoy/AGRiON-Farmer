import React, { createContext, useState, useEffect, useContext } from 'react';
import { db, rdb } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import { collection, addDoc, onSnapshot, query, getDocs, orderBy, limit } from 'firebase/firestore';

const SensorDataContext = createContext();

export const SensorDataProvider = ({ children }) => {
  const [sensorData, setSensorData] = useState({
    soilMoisture: 0,
    temperature: 0,
    humidity: 0,
    pH: 0,
    light: 0,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  });

  const [chartData, setChartData] = useState([]);

  // 1️⃣ Get live sensor values from Realtime Database
  useEffect(() => {
    const dbRef = ref(rdb, '/sensorData');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensorData(prev => ({ ...prev, ...data }));
      }
    });

    return () => unsubscribe();
  }, []);

  // 2️⃣ Real-time listener for chart data from Firestore (updated to fetch data every 2 minutes)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'Soil_Moisture_Data'),
          orderBy('time', 'desc'),
          limit(10)
        );
        const querySnapshot = await getDocs(q);

        const moistureValue = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();
            const time = data.time?.seconds
              ? new Date(data.time.seconds * 1000 + (data.time.nanoseconds || 0) / 1e6)
              : new Date();
            return {
              time,
              soilMoisture: data.Moisture_value || 0,
            };
          })
          .sort((a, b) => a.time - b.time); // sort by timestamp

        setChartData(moistureValue);
      } catch (error) {
        console.error("❌ Error fetching data from Firestore:", error);
      }
    };

    // Fetch data immediately on load
    fetchData();

    // Fetch data every 2 minutes (120,000 ms)
    const interval = setInterval(fetchData, 120000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // 3️⃣ Push current soil moisture every 2 minutes
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const timestamp = new Date();

        await addDoc(collection(db, 'Soil_Moisture_Data'), {
          Moisture_value: sensorData.soilMoisture,
          time: timestamp,
        });

        console.log("✅ Soil moisture data pushed to Firestore at", timestamp.toLocaleTimeString());
      } catch (error) {
        console.error("❌ Error pushing soil moisture data to Firestore:", error);
      }
    }, 120000); // 2 minutes = 120,000 ms

    return () => clearInterval(interval);
  }, [sensorData.soilMoisture]);

  return (
    <SensorDataContext.Provider value={{ sensorData, chartData }}>
      {children}
    </SensorDataContext.Provider>
  );
};

export const useSensorData = () => useContext(SensorDataContext);
export default SensorDataContext;
