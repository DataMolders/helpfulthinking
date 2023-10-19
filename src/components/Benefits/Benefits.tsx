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
                        <div className={styles.text}>Se te asigna el personal</div>
                    </div>
                    <div className={styles.stepContainer}>
                        <div className={styles.text}>Empieza tu terapia online</div>
                    </div>
                    <button className={styles.startBtn}>Empezar</button>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.title}>Beneficios</div>
                    <div className={styles.text}>- Consulta y atención especializada online</div>
                    <div className={styles.text}>- Evita desplazamientos y mejora la conciliación horaria</div>
                    <div className={styles.text}>- Equipo de psicólogos y psiquiatras con experiencia asistencial</div>
                    <div className={styles.text}>- Canal de comunicación seguro y confidencial</div>
                    <div className={styles.text}>- Prescripción online</div>
                </div>
            </div>
        </div>
    )
}

export default Benefits