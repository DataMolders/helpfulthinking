import React from 'react'


import styles from "./Faqs.module.scss"

function Faqs() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>FAQ</div>
                <div className={styles.accordionContainer}>
                    <details className={styles.details}>
                        <summary>
                            <div>¿Qué es Helpful Thinking?</div>
                        </summary>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary>
                            <div>¿Cómo funciona Helpful Thinking?</div>
                        </summary>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary>
                            <div>¿Cómo agendar mi primera cita?</div>
                        </summary>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary>
                            <div>¿Cómo acudir a Helpful Thinking?</div>
                        </summary>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
                    <details className={styles.details}>
                        <summary>
                            <div>¿La terapia en línea es efectiva?</div>
                        </summary>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </details>
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