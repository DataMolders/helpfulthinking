import React from 'react'

import styles from "./Benefits.module.scss"

function Benefits() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.title}>Cómo funciona</div>
                    <div className={styles.stepContainer}>
                        <div className={styles.text}>Rellena el formulario de evaluación</div>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.text}>Se te asigna a un profesional</div>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.text}>Empieza tu terapia online</div>
                    </div>
                    <button className={styles.startBtn}>Empezar</button>
                </div>
                <div className={styles.bottom}>
                    <div className={`${styles.title} ${styles.margin}`}>Beneficios</div>

                    <div className={styles.listContainer}>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Atención profesional personalizada
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Sin tiempo de espera ni desplazamientos
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Resolución de cualquier tipo de situación
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Canal de comunicación seguro y confidencial
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Prescripción de recetas online
                        </div>
                        <div className={`${styles.blackText} ${styles.listItem}`}>
                            <span className={styles.circle}></span>Acceso a tu historial médico online
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Benefits