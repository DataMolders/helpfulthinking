import React from 'react'

import styles from "./Treatment.module.scss"

function Treatment() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}> Áreas de tratamiento </div>
                <div className={styles.top}>
                    <div>Ansiedad y preocupaciones excesivas</div>
                    <div>Crisis de pareja o domésticas</div>
                    <div>Depresión y problemas con la regulación emocional</div>
                    <div>Estrés laboral</div>
                    <div>Dificultades de adaptación y resolución de conflictos</div>

                </div>
                <div className={styles.bottom}>
                    <div>Adicciones</div>
                    <div>Desarrollo profesional o realización de objetivos</div>
                    <div>Problemas alimentarios y de sensibilización corporal</div>
                    <div>Atención a población infantil y juvenil</div>
                    <div>otros</div>
                </div>
            </div>
        </div>
    )
}

export default Treatment