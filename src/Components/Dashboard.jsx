import React from "react";
import { useSensorData } from "../context/SensorDataContext"; // adjust path
import {
  Container, Grid, Card, CardContent, Typography
} from "@mui/material";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

// Same getSensorColor logic as before
const getSensorColor = (sensorName, value) => {
  const thresholds = {
    soilMoisture: { good: 60, warning: 30 },
    temperature: { good: 25, warning: 35 },
    humidity: { good: 50, warning: 30 },
    pH: { good: 6.5, warning: 5.5 },
    light: { good: 500, warning: 300 },
    nitrogen: { good: 50, warning: 30 },
    phosphorus: { good: 50, warning: 30 },
    potassium: { good: 50, warning: 30 },
  };

  if (!thresholds[sensorName]) return '#cccccc';

  const { good, warning } = thresholds[sensorName];

  if (sensorName === 'temperature') {
    if (value <= good) return '#5fa437';
    if (value <= warning) return '#ffc107';
    return '#dc3545';
  }

  if (value >= good) return '#5fa437';
  if (value >= warning) return '#ffc107';
  return '#dc3545';
};

const Dashboard = () => {
  const { sensorData, chartData } = useSensorData();//sensorData from context

  return (
    <>
      <div className="flex h-[60px] w-[100%] bg-[#fff] p-2 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold mb-6 text-[#5fa437]">Analytics</h1>
      </div>

      <Container className="relative" style={{ padding: "40px" }}>
        <Grid container spacing={3} sx={{ padding: 3 }}>
          {Object.keys(sensorData).map((sensor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{
                borderBottom: 5,
                borderColor: getSensorColor(sensor, sensorData[sensor]),
                boxShadow: 3,
                transition: 'border-color 0.3s ease-in-out'
              }}>
                <CardContent sx={{ padding: 2 }}>
                  <Typography variant="h6">
                    {sensor.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </Typography>
                  <Typography variant="h4">
                    {sensorData[sensor]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Soil Moisture Trend</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="soilMoisture"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
