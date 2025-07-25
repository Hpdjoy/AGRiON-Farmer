import React, { useEffect, useState } from 'react';
import { useSensorData } from '../context/SensorDataContext';
import { useSettingsData } from '../context/settingsDataContext';
import { useControlData } from '../context/ControlDataContext'; // Fixing the import

const Test = () => {
  const { sensorData } = useSensorData();
  const { settingsData } = useSettingsData();
  const { controlData } = useControlData(); // Fetch control data from context

  // Parse threshold helper function
  const parseThreshold = (threshold, defaultVal = 0) => {
    if (typeof threshold === 'number') {
      return { min: threshold, max: threshold };
    }
    const min = parseFloat(threshold?.min ?? defaultVal);
    const max = parseFloat(threshold?.max ?? defaultVal);
    return { min, max };
  };

  // Check if value is out of threshold range
  const isOutOfRange = (value, min, max) => {
    if (min === max) {
      return value !== min; // exact match condition for fixed value
    }
    return value < min || value > max; // normal range check for variable thresholds
  };

  if (!sensorData || !settingsData || !controlData) return <div className="text-center mt-20">Loading...</div>;

  // Prepare the sensor table data
  const sensorTableData = [
    {
      label: 'Temperature (°C)',
      value: sensorData.temperature ?? 0,
      ...parseThreshold(settingsData.temperatureThreshold, 25),
    },
    {
      label: 'Humidity (%)',
      value: sensorData.humidity ?? 0,
      ...parseThreshold(settingsData.humidityThreshold, 50),
    },
    {
      label: 'Soil Moisture (%)',
      value: sensorData.soilMoisture ?? 0,
      ...parseThreshold(settingsData.soilMoistureThreshold, 30),
    },
    {
      label: 'Light (Lux)',
      value: sensorData.light ?? 0,
      ...parseThreshold(settingsData.lightThreshold, 1000),
    },
    {
      label: 'pH',
      value: sensorData.pH ?? 0,
      ...parseThreshold(settingsData.phThreshold, 7),
    },
    {
      label: 'Nitrogen (mg/kg)',
      value: sensorData.nitrogen ?? 0,
      ...parseThreshold(settingsData.nitrogenThreshold, 10),
    },
    {
      label: 'Phosphorus (mg/kg)',
      value: sensorData.phosphorus ?? 0,
      ...parseThreshold(settingsData.phosphorusThreshold, 10),
    },
    {
      label: 'Potassium (mg/kg)',
      value: sensorData.potassium ?? 0,
      ...parseThreshold(settingsData.potassiumThreshold, 10),
    },
  ];

  // Prepare actuator data
  const actuators = [
    { name: 'Exhaust Fan', status: controlData.exhaustFan ?? false },
    { name: 'Grow Light', status: controlData.growLight ?? false },
    { name: 'Water Motor', status: controlData.waterMotor ?? false },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Header */}
      <div className="flex h-[60px] w-full bg-[#fff] p-2 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold text-[#5fa437]">Test Lab</h1>
      </div>
    
      {/* Sensor Data Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg pt-20 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Sensor Data & Thresholds</h2>
        <table className="min-w-full text-sm text-left border border-gray-200 rounded-2xl">
          <thead className="bg-green-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Sensor</th>
              <th className="px-4 py-2 border">Value</th>
              <th className="px-4 py-2 border">Threshold</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {sensorTableData.map(({ label, value, min, max }) => {
              const outOfRange = isOutOfRange(value, min, max);
              return (
                <tr key={label} className={outOfRange ? 'bg-red-50' : 'bg-green-50'}>
                  <td className="px-4 py-2 border font-medium">{label}</td>
                  <td className="px-4 py-2 border">{value}</td>
                  <td className="px-4 py-2 border">{`${min} – ${max}`}</td>
                  <td className={`px-4 py-2 border font-semibold ${outOfRange ? 'text-red-600' : 'text-green-600'}`}>
                    {outOfRange ? '⚠ Out of Range' : '✅ Normal'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Actuator Table */}
      <div className="overflow-x-auto mt-10 bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Actuator Status</h2>
        <table className="min-w-full text-sm text-left border border-gray-200">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Actuator</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {actuators.map(({ name, status }) => (
              <tr key={name} className="bg-white">
                <td className="px-4 py-2 border font-medium">{name}</td>
                <td className={`px-4 py-2 border font-semibold ${status ? 'text-green-600' : 'text-gray-500'}`}>
                  {status ? '🟢 On' : '⚪ Off'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;
