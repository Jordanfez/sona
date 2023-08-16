import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

const Button = () => {
  return (
    <Link to="connexion">
      <button className='btn'> connexion</button>
    </Link>
  )
}

export default Button
