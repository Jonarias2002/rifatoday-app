import React from 'react'
<<<<<<< HEAD
import './App.css'
import Singup from './components/Singup'
import Login from './components/Login'
import Nabvar from './components/Nabvar'
import Menu from './components/Menu'
import Perfil from './components/Perfil'
import Soporte from './components/Soporte'
=======
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
>>>>>>> ea4a54eb884d8a93e777db457fc15644ddf98d4a

function App() {

  return (
<<<<<<< HEAD
    <>
      <Nabvar/>
      <Soporte />
      <Menu/>
    </>
=======
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
>>>>>>> ea4a54eb884d8a93e777db457fc15644ddf98d4a
  )
}

export default App
