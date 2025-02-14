import React from 'react'
import styles from './pagewrapper.module.css'

const PageWrapper = ({children}) => {
  return (
    <>
      <div className={styles.wrapper}>
         {children}
      </div>
     
    </>
    
  )
}

export default PageWrapper