import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import Button from './Button'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <nav class="navbar-one flex">
        <div class="left flex">
                <div class="email">
                 <i class="fa fa-envelope"></i>
                 <span>info@tintin.com</span>
               </div>
               <div class="call">
                   <i class="fa fa-phone-alt"></i>
                  <span>+237 695 45-82-65</span>
                 </div>
              </div>
              <div class="right flex">
                 <div class="twitter">
                <i class="fab fa-twitter"></i>
                  <span>Twitter</span>
              </div>
            <div class="facebook">
                 <i class="fab fa-facebook"></i>
              <span>Facebook</span>
          </div>
        </div>
      </nav>

      <nav class=" navbar-second flex">
          <div class="logo">
              <h1>Sona.</h1>
          </div>
          <ul className="flex">
              <li><a href="/Home">Home</a></li>
              <li><a href="/Rooms">Rooms</a></li>
              <li><a href="About US">About US</a></li>
              <li><a href="News">News</a></li>
              <li><a href="Contact">Contact</a></li>
          </ul>
          <div>
            <form action="">
              <input type="text" className='search' placeholder='rechercher...' />
              <input type="submit" className='sear' value=" search" />
            </form>
          </div>
      </nav>
    </>
  )
}

export default NavBar
/**
 *  <nav className='navBar'>
        <Link to="/" className='navbar-logo'>
            NATURAL
        </Link>
        <ul class="nav-items">
                    <li class="active">
                     <Link>Accueil</Link> 
                    </li>

                    <li class="nav-item dropdown">
                    <Link>OBSIC-AC</Link>
                    </li>

                    <li class="nav-item dropdown">
                    <Link>Médias</Link>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
        <Button></Button>       
     </nav>
 */