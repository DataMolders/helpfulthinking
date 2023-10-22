import React from 'react'

import styles from "./Benefits.module.scss"
import Image from 'next/image'

import icono1 from "@/assets/images/icono1.png"
import icono2 from "@/assets/images/icono2.png"
import icono3 from "@/assets/images/icono3.png"

function Benefits() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.title}>Cómo funciona</div>
                    <div className={styles.stepsContainer}>
                        <div className={styles.stepContainer}>
                            <Image src={icono1}
                                width={379}
                                height={130}
                                alt="icono1" />
                            <div className={styles.text}>Rellena el formulario de evaluación</div>
                        </div>
                        <div className={styles.stepContainer}>
                            <Image src={icono2}
                                width={379}
                                height={130}
                                alt="icono2" />
                            <div className={styles.text}>Se te asigna el personal</div>
                        </div>
                        <div className={styles.stepContainer}>
                            <Image src={icono3}
                                width={379}
                                height={130}
                                alt="icono3" />
                            <div className={styles.text}>Empieza tu terapia online</div>
                        </div>
                    </div>
                    <button className={styles.startBtn}>Empezar</button>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.title2}>Beneficios</div>
                    <div className={styles.text2}>- Consulta y atención especializada online</div>
                    <div className={styles.text2}>- Evita desplazamientos y mejora la conciliación horaria</div>
                    <div className={styles.text2}>- Equipo de psicólogos y psiquiatras con experiencia asistencial</div>
                    <div className={styles.text2}>- Canal de comunicación seguro y confidencial</div>
                    <div className={styles.text2}>- Prescripción online</div>
                </div>
            </div>
        </div>
    )
}

export default Benefits