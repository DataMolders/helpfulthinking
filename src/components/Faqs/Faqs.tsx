import React from 'react'


import styles from "./Faqs.module.scss"

function Faqs() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>FAQ</div>
                <div className={styles.accordionContainer}>
                    <button className="accordion">¿Qué es Helpful Thinking?</button>
                    <div className="panel">
                        <p>¿Qué es Helpful Thinking?</p>
                    </div>
                    <button className="accordion">¿Cómo funciona Helpful Thinking?</button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>
                    <button className="accordion">¿Cómo agendar mi primera cita?</button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>
                    <button className="accordion">¿Cómo acudir a Helpful Thinking?</button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>
                    <button className="accordion">¿La terapia en línea es efectiva?</button>
                    <div className="panel">
                        <p>Lorem ipsum...</p>
                    </div>
                </div>
                <div className={styles.subtitle}>
                    ¿No encuentras respuesta a tu pregunta? envíanos un email a
                    hello@helpful-thinking.com
                </div>
            </div>
        </div>
    )
}

export default Faqs