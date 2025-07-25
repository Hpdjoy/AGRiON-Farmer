import ProtectedRoute from './Components/ProtectedRoute.jsx'
import AgrionPrediction from './Components/AgrionPrediction.jsx'
import PageNotFound from './Components/PageNotFound.jsx'
import Dashboard from './Components/Dashboard.jsx'
import { Routes, Route } from 'react-router-dom'
import Controls from './Components/Controls.jsx'
import Settings from './Components/Settings.jsx'
import Login from './Components/Login.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Test from './Components/Test.jsx'
import { useState } from 'react'


function App() {

  const [isLoggedIn, setIsloggedIn] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/login" element={
          <Login isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} />
          }/>

        {/* ProtectedRoute wraps Home layout */}
        <Route path="/home" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Home setIsloggedIn={setIsloggedIn} />
          </ProtectedRoute>}>

          <Route index element={<Dashboard />} />
          <Route path="llm" element={<AgrionPrediction />} />
          <Route path="controls" element={<Controls />} />
          <Route path="settings" element={<Settings />} />
          <Route path="test" element={<Test />}></Route>
          
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  )
}

export default App
