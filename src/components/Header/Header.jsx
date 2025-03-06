import styles from './header.module.css'

const Header = ({pageProps, children}) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
            <h2>{pageProps.title}</h2>
            <p> Step {pageProps.number}/3</p>
        </div>

        <div className={styles.underline}></div>
        {children}
      </div>
        
    </div>
    </>
  )
}

export default Header