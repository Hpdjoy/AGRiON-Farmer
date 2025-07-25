import { BrowserRouter } from 'react-router-dom'
import { SensorDataProvider } from './context/SensorDataContext.jsx'
import { SettingsDataProvider } from './context/settingsDataContext.jsx'
import { ControlDataProvider } from './context/ControlDataContext.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ControlDataProvider>
  <SensorDataProvider>
  <SettingsDataProvider>
    <App /> 
  </SettingsDataProvider>
  </SensorDataProvider>
  </ControlDataProvider>

  </BrowserRouter>,
)
