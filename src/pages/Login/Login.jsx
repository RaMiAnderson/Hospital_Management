import React from 'react'
import LoginCover from "../../assets/cover/bg.svg"
import Icon from "../../assets/ico/iconSymptoScan.png"

//component
import { TextField } from '@mui/material'

//style
import "./Login.css"

let Login = ()=> {
  return (
    <>
      <div className='loginParent'>
        <section className="cover">
          <img src={LoginCover}  alt='Cover'/>
        </section>
        <section className='sectionForm'>
          {/* logo of Hospital */}
          <div>

          </div>

          <div className='salutation'>
            <h2>Welcome Back Doctor !</h2>
            <p>Lets get you Logged in</p>
          </div>

          <div className='divForm'>

          </div>
        </section>
      </div>
      
    </>
  )
}

export default Login