import React from 'react'
import PageWrapper from '../../components/Pagewrapper/PageWrapper'
import Divider from '../../components/Divider/Divider'
import styles from './homepage.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const HomePage = () => {
    const [option, setOption] = useState('1');

    const handleClick = (event) =>{
        event.currentTarget.classList.add(styles.activated)
        document.querySelectorAll(`.${styles.tickettypeoption}`).forEach((option)=>{
            if(event.currentTarget !== option){
                option.classList.remove(styles.activated);
                
            }
        })
    }

    const getValues = () =>{
        const type = document.querySelector(`.${styles.activated}`).dataset.type;
        const numOfTickets = option;

        localStorage.setItem("type", type);
        localStorage.setItem("numOfTickets", numOfTickets)
        
        
    }
  return (
    <PageWrapper>
    <div className={styles.hero}>
            <h1>Techember Fest "25</h1>
            <p>Join us for an unforgettable experience at [Event name]! Secure your spot now.</p>
            <p>📍 [Event Location]  ||  March 15, 2025 | 7:00PM</p>
        </div>
        <Divider/>
        <div className={styles.selecttype}>
            <p>Select Ticket Type: </p>
            <div className={styles.tickettype}>
            <button onClick={handleClick} data-price="free" data-type="REGULAR ACCESS" className={`${styles.tickettypeoption} ${styles.activated}`}>
                <div className='option-child'>
                    <p>Free</p>
                    <p>REGULAR ACCESS</p>
                    <p>20/52</p>
                </div>
                
            </button>

            <button  onClick={handleClick} data-price="50" data-type="VIP ACCESS" className={styles.tickettypeoption}>
                <div className='option-child'>
                    <p>$50</p>
                    <p>VIP ACCESS</p>
                    <p>20/52</p>
                </div>
                
            </button>

            <button onClick={handleClick} data-price="150" data-type="VVIP ACCESS" className={styles.tickettypeoption}>
                <div className='option-child'>
                    <p data-price="150">$150</p>
                    <p>VVIP ACCESS</p>
                    <p>20/52</p>
                </div>
            </button>
        </div>


        </div>
        

        <div className={styles.numoftickets}>
            <label htmlFor="num-of-tickets">Number Of Tickets</label>
            <select name="numbers" onChange = {e => setOption(e.target.value)} className={styles.dropdown}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div className={styles.buttons}>
                <button className={styles.cancel}>Cancel</button>
                <Link to='/details' onClick={getValues} className={styles.link}>Next</Link>
            </div>
    </PageWrapper>
  )
}

export default HomePage