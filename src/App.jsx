import React from 'react'
import './App.css'
import Singup from './components/Singup'
import Login from './components/Login'
import Nabvar from './components/Nabvar'
import Menu from './components/Menu'
import Perfil from './components/Perfil'
import Soporte from './components/Soporte'

function App() {

  return (
    <>
      <Nabvar/>
      <Singup />
      <Menu/>
    </>
  )
}

export default App
