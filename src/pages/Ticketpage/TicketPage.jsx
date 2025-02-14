import React from 'react'
import styles from './ticketpage.module.css'
import PageWrapper from '../../components/Pagewrapper/PageWrapper'
import {Link} from 'react-router-dom'

const TicketPage = () => {
 const imgUrl = localStorage.getItem('imgUrl');
 const name = localStorage.getItem('name');
 const email =localStorage.getItem('email');
 const request =localStorage.getItem('request');
 const type = localStorage.getItem('type')
 const numOfTickets = localStorage.getItem('numOfTickets')
  return (
    <PageWrapper>
      <div className={styles.ticketpagecontainer}>
        <h2>Your ticket is booked</h2>
        <p>Check your email for a copy or you can download</p>

        <div className={styles.ticket}>
          <img className={styles.ticketimage} src="../../src/assets/images/subtract.png" alt="" />

          <div className={styles.ticketinfo}>
            <h2>Techember Fest "25</h2>
            <p>04 Rumens road, Ikoyi, Lagos</p>
            <p>March 15, 2025 | 7:00pm </p>
          <div className={styles.piccontainer}>
              <img src={imgUrl} alt="" />
            </div>

            <div className = {styles.infogrid}>
              <div>
                <p>Name</p>
              <p>{name}</p>
              </div>
              <div>
                <p>Email</p>
                <p>{email}</p>
              </div>
              <div>
                <p>Ticket Type:</p>
                <p>{type}</p>
              </div>
              <div>
                <p>Ticket for:</p>
                <p>{numOfTickets}</p>
              </div>
              <div>
                <p>Special request</p>
              <p>{request}</p>
              </div>         
            </div>

            <div className={styles.barcode}>
               <img src="../../src/assets/images/barcode.png" alt="" />
            </div>
          </div>

        </div>

        <div className={styles.buttons}>
            <Link to='/' className={styles.another}>Book Another Ticket</Link>
            <button>Download Ticket</button>
        </div>
      </div>
    </PageWrapper>

  )
}

export default TicketPage