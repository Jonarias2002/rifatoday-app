import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Singup from './components/Singup'
import Login from './components/Login'
import Perfil from './components/Perfil'
import Soporte from './components/Soporte'
import Sorteos from './components/Sorteos'
import Tutoriales from './components/Tutoriales'
import Tickets from './components/Tickets'
import Header from './components/Header'
import Footer from './components/Footer'
import {Auth0Provider} from '@auth0/auth0-react'
import Loading from './components/Loading'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/perfil' element={<Perfil />}/>
          <Route path='/tutoriales' element={<Tutoriales />}/>
          <Route path='/tickets' element={<Tickets />}/>
          <Route path='/soporte' element={<Soporte />}/>
          <Route path='/sorteos' element={<Sorteos />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
