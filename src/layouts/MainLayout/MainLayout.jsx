import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import styles from './mainlayout.module.css'
import { useLocation } from 'react-router-dom'
const MainLayout = ({}) => {
  const location = useLocation();
  let pageProps = {};

  if (location.pathname === '/'){
    pageProps = {title: 'Ticket Selection', number :'1'}
  }
  else if(location.pathname === '/details'){
    pageProps = {title: 'Attendee Details', number :'2'}
  }
  else if(location.pathname === '/ticket'){
    pageProps = {title: 'Ticket Ready', number :'3'}
  }
  return (
    <div className={styles.container}>
    <NavBar/>
    <Header pageProps = {pageProps}>
      <Outlet/>
    </Header>
    
    </div>
  
  )
}

export default MainLayout