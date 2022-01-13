import React from 'react'
import styles from './style.module.css'

function Loader() {
  return (
    <div className="d-flex justify-content-center">
    <div className={styles['lds-dual-ring']}>
    </div>
  </div>
  )
}

export default Loader
