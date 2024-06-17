import ReactDoM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import LandingPage from './components/LandingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Onboarding from './pages/Onboarding'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/onboard" element={<Onboarding
       />} /> 
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
