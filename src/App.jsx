import ReactDoM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './components/About'
import LandingPage from './components/LandingPage'
import UserBoard from './components/UserBoard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Onboarding from './pages/Onboarding'

import userData from './userData'
import Layout from './components/Layout'

import { PermissionProvider } from 'react-permission-role'

function App() {
  return (
    <PermissionProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      
      <Route path='/*' element={<Layout>
        <Routes>
        
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/about" element={<About />} /> 

      <Route path="/onboard" element={<Onboarding
       />} /> 

      <Route path="/user-dashboard" element={<UserBoard userData={userData} />} /> 
      <Route path="*" element={<div>Page not found</div>}/> 

      
        </Routes>
        </Layout>
      }
      />
      </Routes>
    </BrowserRouter>
    </PermissionProvider>
  )
}

export default App
