import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Singup from './components/Singup'
import Login from './components/Login'
import Nabvar from './components/Nabvar'
import Menu from './components/Menu'
import Perfil from './components/Perfil'
import Soporte from './components/Soporte'
import Sorteos from './components/Sorteos'
import Tutoriales from './components/Tutoriales'
import Tickets from './components/Tickets'

function App() {

  return (
    <BrowserRouter>
      <Nabvar/>
        <Routes>
          <Route path='/perfil' element={<Perfil />}/>
          <Route path='/tutoriales' element={<Tutoriales />}/>
          <Route path='/tickets' element={<Tickets />}/>
          <Route path='/soporte' element={<Soporte />}/>
          <Route path='/sorteos' element={<Sorteos />}/>
        </Routes>
      <Menu />
    </BrowserRouter>
  )
}

export default App
