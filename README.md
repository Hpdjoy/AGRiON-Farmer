# Agrion - Smart Agriculture Monitoring and Control Dashboard

Agrion is a comprehensive smart agriculture solution designed to monitor and control the environment for optimal crop growth. The platform connects real-time sensor data (such as temperature, humidity, soil moisture, light, and pH) with a web dashboard built using React and Firebase. It allows users to view trends, manage settings, and control actuators like grow lights, fans, and water pumps based on environmental data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Firebase Configuration](#firebase-configuration)
- [Dashboard Features](#dashboard-features)
- [Sensor Setup](#sensor-setup)
- [Actuator Control](#actuator-control)
- [Threshold Settings](#threshold-settings)
- [Contributing](#contributing)
- [License](#license)

## Overview

Agrion is designed for farmers, agricultural researchers, and enthusiasts to help them monitor and optimize conditions for crops. The system allows users to select crop types and growth phases, adjust environmental thresholds, and automate the control of actuators for better growth conditions.

The project uses various sensors like:
- **DHT11**: For temperature and humidity
- **TSL2561**: For light intensity
- **Capacitive Soil Moisture Sensor**: For measuring soil moisture
- **pH Sensor**: For measuring soil pH
- **16x2 LCD**: For displaying real-time sensor data

The data is logged in **Firebase Realtime Database** for real-time monitoring and in **Firebase Firestore** for historical data tracking and graphing.

## Features

- **Real-time Sensor Monitoring**: View real-time temperature, humidity, light, soil moisture, and pH data.
- **Historical Data Visualization**: View historical trends of environmental data over time.
- **Threshold Configuration**: Set and adjust thresholds for optimal crop conditions (temperature, humidity, pH, light, soil moisture).
- **Automated Mode**: Automatically adjust environmental settings based on sensor data.
- **Manual Mode**: Manually control actuators like lights, fans, and water pumps.
- **Crop and Growth Phase Configuration**: Select crop types (e.g., tomato, rice) and adjust settings according to the selected growth phase.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Material UI
- **Backend**: Firebase (Realtime Database, Firestore)
- **Embedded System**: ESP32, Sensors (DHT11, pH, TSL2561, Capacitive Soil Moisture)
- **Programming Languages**: JavaScript, C++ (for ESP32)

## Getting Started

To get started with the Agrion project locally, follow the steps below.

### Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn (for dependency management)
- Firebase account and project
- ESP32 board for sensor data collection

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/agrion.git
```

2. Install dependencies:

```bash
cd aiagriculture
npm install 
```
3. Set up Firebase in the project:
Create a Firebase project in the Firebase Console

Enable Firebase Realtime Database and Firestore

Add your Firebase configuration to the project (check firebase.js)

4. Run the development server:

```bash
npm run dev
Open your browser and go to http://localhost:3000 to access the dashboard.
```
## Firebase Configuration
 Set up Firebase by creating a Firebase project in the Firebase Console.

Enable Realtime Database and Firestore for real-time and historical data storage.

Add the Firebase configuration to firebase.js:
```javascript
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const rdb = getDatabase(app);
const firestore = getFirestore(app);

export { rdb, firestore };
```
## Folder Structure
```bash
/agrion
  /public           # Public assets (index.html, images)
  /src
    /components     # React components (Settings, Dashboard, etc.)
    /data           # Default crop thresholds and settings
    /firebase       # Firebase configuration and helpers
    /styles         # Tailwind and custom styles
    App.js          # Main App component
    index.js        # Entry point of the React app
  .env              # Environment variables (e.g., Firebase API keys)
  package.json      # Project dependencies and scripts
  vite.config.js    # Vite configuration
  ```
## Dashboard Features
The dashboard provides a clean and user-friendly interface for the following:

System Info: Display device ID and location

Crop Info: Select crop type and growth phase, with default threshold values

Sensor Thresholds: Adjust and set min/max thresholds for various sensors

Monitoring Mode: Toggle between manual and automated modes for controlling actuators

Actuator Control: Manually turn on/off actuators like lights, fans, and water pumps

## Sensor Setup
 Sensors are connected to the ESP32 and send data to Firebase Realtime Database for real-time monitoring. The following sensors are supported:

DHT11: For temperature and humidity

TSL2561: For light intensity

Capacitive Soil Moisture Sensor: For soil moisture

pH Sensor: For measuring soil pH

These sensors are configured in the ESP32 firmware and send periodic readings to the Firebase database.

## Actuator Control
The system can control three actuators:

Grow Light: Controlled via GPIO pin

Exhaust Fan: Controlled via GPIO pin

Water Pump: Controlled via GPIO pin

Users can control these actuators manually via the dashboard or automatically when in automated mode.

## Threshold Settings
Threshold values for each sensor (temperature, humidity, light, soil moisture, pH, nitrogen, phosphorus, potassium) are adjustable based on the selected crop type and growth phase. These values are pre-configured for different crops and growth stages, but users can modify them for their specific needs.

## Contributing
We welcome contributions to improve the Agrion project! Feel free to fork the repository and submit pull requests. Please follow these steps:

## Fork the repository

Create a feature branch (git checkout -b feature-branch)

Make your changes

Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature-branch)

Open a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

