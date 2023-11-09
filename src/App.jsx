import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import OutletConnection from './routes/OutletConnection'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileFilter from './pages/ProfileFilter'
import ProfileDetails from './pages/ProfileDetails'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<OutletConnection/>}>
        <Route index element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profileFilter' element={<ProfileFilter/>}/>
        <Route path='/profileDetails' element={<ProfileDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
