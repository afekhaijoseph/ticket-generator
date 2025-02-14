import React from 'react'
import logo from '../../assets/images/logo.svg'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

const NavBar = ({children}) => {
  return (
    <nav id={styles.navigation}>
      <Link href="/">
        <div id="logo">
            <img src={logo} alt="" />
        </div>
      </Link>
        
        <ul>
            <li>Events</li>
            <li>My tickets</li>
            <li>About Project</li>
        </ul>
        <Link id={styles.myticket}>MY TICKETS</Link>
        {children}
    </nav>
  )
}

export default NavBar