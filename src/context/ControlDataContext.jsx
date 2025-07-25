import React, { createContext, useState, useEffect, useContext } from 'react';
import { ref, onValue } from 'firebase/database';
import { rdb } from '../../firebase'; // Realtime DB

const ControlDataContext = createContext();

export const ControlDataProvider = ({ children }) => {
  const [controlData, setControlData] = useState({
    exhaustFan: false,
    growLight: false,
    waterMotor: false,
  });

  useEffect(() => {
    const dbRef = ref(rdb, '/controls');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setControlData({
          exhaustFan: data.exhaustFan ?? false,
          growLight: data.growLight ?? false,
          waterMotor: data.waterMotor ?? false,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ControlDataContext.Provider value={{ controlData }}>
      {children}
    </ControlDataContext.Provider>
  );
};

export const useControlData = () => useContext(ControlDataContext);
export default ControlDataContext;
