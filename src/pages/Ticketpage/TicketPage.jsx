import styles from './ticketpage.module.css'
import PageWrapper from '../../components/Pagewrapper/PageWrapper'
import {Link} from 'react-router-dom'
import ticketImage from '../../assets/images/subtract.png';
import barCode from '../../assets/images/barcode.png'
import html2canvas from 'html2canvas';

const TicketPage = () => {
 const imgUrl = sessionStorage.getItem('imgUrl');
 const name = localStorage.getItem('name');
 const email =localStorage.getItem('email');
 const request =localStorage.getItem('request');
 const type = localStorage.getItem('type')
 const numOfTickets = localStorage.getItem('numOfTickets')

 const handleTicketDownload = async () =>{
  const screenshot = document.querySelector('.download');
  if (!screenshot) {
    console.error("Element not found in the DOM.");
    return;
  }
  await html2canvas(screenshot, {
    useCORS: true,
    allowTaint: false,
  }).then(canvas => {
    const imgData = canvas.toDataURL("image/png"); // Convert to image
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "ticket.png";
    link.click(); // Auto-download the 
    alert('downloaded')
});
 }
  return (
    <PageWrapper>
      <div className={styles.ticketpagecontainer}>
        <h2>Your ticket is booked</h2>
        <p>Check your email for a copy or you can download</p>

        <div className={`${styles.ticket} download`}>
          <img className={styles.ticketimage} src={ticketImage} />

          <div className={styles.ticketinfo}>
            <h2>Techember Fest &quot;25</h2>
            <p>📍04 Rumens road, Ikoyi, Lagos</p>
            <p>📅 March 15, 2025 | 7:00 PM </p>
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
              <img src={barCode} alt="" />
            </div>
          </div>

        </div>

        <div className={styles.buttons}>
            <Link to='/' className={styles.another}>Book Another Ticket</Link>
            <button className={styles.downloadticket} onClick={handleTicketDownload}>Download Ticket</button>
        </div>
      </div>
    </PageWrapper>

  )
}

export default TicketPage