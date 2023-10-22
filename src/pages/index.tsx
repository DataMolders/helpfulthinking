import Head from 'next/head'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Homepage from '@/components/Homepage/Homepage'
import Benefits from '@/components/Benefits/Benefits'
import Modal from '@/components/Modal/Modal'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Helpful Thinking</title>
        <meta name="description" content="Helpful Thinking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Homepage openModal={openModal} />
          <Benefits />
          <Modal isOpen={isModalOpen} onClose={closeModal} content={<div>Modal Content</div>} />
        </div>
      </main>
    </>
  )
}
