//importamos los módulos de firebase
import {db, storage, auth} from './firebaseConfig/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
//importamos los componentes
import { Login } from './components/Login.jsx'
import { Start } from './components/Principal.jsx'

import './App.css'
//importamos los Hooks
import { useState } from 'react'

function App() {
  const [usuario,setUsuario] = useState(null)

  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <>
      {usuario?<Start correoUsuario={usuario.email}/>:<Login/>}
    </>
  )
}

export {App}
