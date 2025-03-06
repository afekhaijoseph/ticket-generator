import PageWrapper from '../../components/Pagewrapper/PageWrapper'
import Divider from '../../components/Divider/Divider'
import styles from './homepage.module.css'
import {Link} from 'react-router-dom'
import {useState, useRef} from 'react'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState('How many tickets are you purchasing?')
    const listRef = useRef(null)
    const selectRef = useRef(null)
    const [error, setError] = useState('');

    const handleClick = (event) =>{
        event.currentTarget.classList.add(styles.activated)
        document.querySelectorAll(`.${styles.tickettypeoption}`).forEach((option)=>{
            if(event.currentTarget !== option){
                option.classList.remove(styles.activated);
            }
        })
    }

    const handleSelect = (e) =>{
        //toggles the dropdown menu
        if(e.currentTarget == selectRef.current){
            setIsOpen((prev) => !prev)
        }
        const newValue = e.target.value;
        if (newValue !== undefined) {
            setOption(newValue);
            setIsOpen(false);
            if(error) setError('');
        }
    }


    const handleSubmit = (e) =>{
        const type = document.querySelector(`.${styles.activated}`).dataset.type;
        const numOfTickets = option;
        if(option == 'How many tickets are you purchasing?'){
            e.preventDefault();
            setError('Please select the number of tickets.')
            return
        }
        localStorage.setItem("type", type);
        localStorage.setItem("numOfTickets", numOfTickets)    
    }

  return (
    <PageWrapper>
    <div className={styles.hero}>
            <h1>Techember Fest &quot;25</h1>
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
            <p htmlFor="num-of-tickets">Number Of Tickets</p>
            <div ref={selectRef} className={styles.ticketnuminput} onClick={handleSelect}>
            <div className={styles.selected}>{option}</div> 
            {
                isOpen && <ul ref={listRef} name="numbers" className={styles.dropdown}>
                <li value="1">1</li>
                <li value="2">2</li>
                <li value="3">3</li>
                <li value="4">4</li>
                <li value="5">5</li>
            </ul> 
           }
            </div>
            {error && <p className={styles.error}>{error}</p>}            
        </div>
        <div className={styles.buttons}>
                <button className={styles.cancel}>Cancel</button>
                <Link to='/details' onClick={handleSubmit} className={styles.link}>Next</Link>
            </div>
    </PageWrapper>
  )
}

export default HomePage