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

function App() {

  return (
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
  )
}

export default App
