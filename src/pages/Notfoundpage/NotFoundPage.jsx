import {Link} from 'react-router-dom'
import styles from './notfoundpage.module.css'

const NotFoundPage = () => {
  return (
    <div className = {styles.notfoundcontainer}>
        <h1 className = {styles.notfoundtext}>How did you get here??</h1>
        <Link className={styles.backhome} to = '/'>Go Back!</Link>
        <div className={styles.backhomecontainer}>
        </div>
    </div>
  )
}

export default NotFoundPage