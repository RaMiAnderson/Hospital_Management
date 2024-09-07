import { useState } from 'react'

//pages
import Login from "./pages/Login/Login.jsx"

//style 
import "./App.css"

let AppLog = ()=> {

  return (
    <Login/>
  )
}

let AppMain = ()=> {

  return (
    <>
      <p>je suis main</p>
    </>
  )
}


export default {
  AppLog,
  AppMain
}
