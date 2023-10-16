import React from 'react'
import styles from "./Navbar.module.scss"
import Image from 'next/image'

import logo from "@/assets/images/HTlogo.png"
import Link from 'next/link'

function Navbar() {
    return (
        <div className={styles.main}>
            <ul className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link href="#">
                        <Image
                            src={logo}
                            alt="Logo"
                            className={styles.logoImage}
                        />
                    </Link>
                </div>
                <nav className={styles.navContainer}>
                    <Link href="#">Funcionamiento</Link>
                    <Link href="#">Áreas de tratamiento</Link>
                    <Link href="#">Quiénes somos</Link>
                    <Link href="#">FAQ's</Link>
                    <Link href="#">Contacto</Link>
                </nav>
                <button className={styles.startBtn}>Empezar</button>
            </ul>
        </div>
    )
}

export default Navbar