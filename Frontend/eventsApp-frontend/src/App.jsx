import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContex'
import HomepageComponent from './pages/HomePage.component'
import LoginPageComponent from './pages/LoginPage.component'
import RegisterPageComponent from './pages/RegisterPage.component'
import NavbarComponent from './components/common/Navbar.component'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <NavbarComponent/>
      <br />
      <div className='auth'>
      <Routes>
          <Route path='/' element={<HomepageComponent/>}/>
          <Route path='/login' element={<LoginPageComponent/>}/>
          <Route path='/register' element={<RegisterPageComponent/>}/>
        </Routes> 
      </div>
    
      
    
    
    </AuthProvider>
  )
}

export default App
