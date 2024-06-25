import React from 'react'

import styles from '../cssModule/Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}><center><h1 className={styles.headerText}>Todo App</h1></center></div>
  )
}

export default Header