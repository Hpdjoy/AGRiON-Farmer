import React, { useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { rdb } from "../../firebase";
import { FaFan, FaLightbulb, FaWater } from "react-icons/fa"; // Importing icons from react-icons

const deviceList = [
  { name: "Exhaust Fan", key: "exhaustFan", icon: <FaFan size={48} /> },
  { name: "Grow Light", key: "growLight", icon: <FaLightbulb size={48} /> },
  { name: "Water Motor", key: "waterMotor", icon: <FaWater size={48} /> },
];

const Controls = () => {
  const [deviceStates, setDeviceStates] = useState({
    exhaustFan: false,
    growLight: false,
    waterMotor: false,
  });

  useEffect(() => {
    const dbRef = ref(rdb, "controls");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setDeviceStates((prev) => ({ ...prev, ...data }));
      }
    });
  }, []);

  const toggleDevice = (key) => {
    const updatedState = !deviceStates[key];
    set(ref(rdb, `controls/${key}`), updatedState);
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Top Header */}
      <div className="flex h-[60px] w-full bg-[#fff] p-2 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold text-[#5fa437]">Control Devices</h1>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deviceList.map((device) => (
            <div
              key={device.key}
              className="shadow-lg rounded-lg p-6 flex flex-col items-center justify-between border-b-4 border-[#b0b0b0] transition-all hover:shadow-2xl"
            >
              {/* Icon and Name */}
              <div className="flex flex-col items-center mb-4">
                <div
                  className={`${
                    deviceStates[device.key] ? "text-red-500" : "text-green-500"
                  } mb-2`}
                >
                  {device.icon}
                </div>

                <h2 className="text-xl font-semibold text-center">{device.name}</h2>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => toggleDevice(device.key)}
                className={`px-6 py-3 rounded-full font-semibold transition duration-300 text-white w-full mt-4 ${
                  deviceStates[device.key]
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {deviceStates[device.key] ? "Turn Off" : "Turn On"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Controls;
