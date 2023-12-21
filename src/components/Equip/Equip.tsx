import React from 'react'

import styles from "./Equip.module.scss"

function Equip() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.title}>Quiénes somos</div>
                    <div className={styles.description}>
                        Helpful Thinking ofrece terapia de salud mental online. Contamos con un equipo internacional de psicólogos y psiquiatras con experiencia asistencial, que garantiza una atención profesional y personalizada, donde quieras y cuando o necesites.
                    </div>
                    <div className={styles.descriptionBot}>
                        Modernizamos la forma de ayudar y apoyar el bienestar
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.descriptionBot}>
                        Equipo liderado por
                    </div>
                    <div className={styles.title}>Ezequiel Jesús Pérez Sánchez</div>
                    <div className={styles.subtitle}>Director médico y socio fundador de Helpful Thinking</div>
                    <div className={styles.description}>
                        Soy médico especialista en Psiquiatría. Lo que más me gusta de mi profesión es la parte clínica, entender y resolver los problemas de mis pacientes. Esto es algo que compagino con mi labor como docente, en gestión e investigación
                    </div>
                    <div className={styles.vision}>
                        Mi visión de la salud mental es global e integradora y me gusta ayudar a la persona entendiendo sus circunstancias.
                    </div>
                    <button>Saber más</button>
                    <button>Conoce al equipo</button>
                </div>
            </div>
        </div>
    )
}

export default Equip