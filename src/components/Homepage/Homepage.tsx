import React from 'react'

import styles from "./Homepage.module.scss"

interface HomepageProps {
  openModal: () => void;
}

function Homepage({ openModal }: HomepageProps) {
  // HERE I CALL openModal() from the index.tsx
  const handleEmpezarClick = () => {
    openModal();
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.subtitle}>Salud Mental Online</div>
          <div className={styles.title}>psiquiatras y psicólog@s</div>
          <div className={styles.description}>a un click de ti</div>
          <button className={styles.startBtn} onClick={handleEmpezarClick}>Empezar</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage