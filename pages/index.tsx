import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from './Login'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insurae</title>
        <meta name="description" content="Smart Insurance" />
        <link rel="icon" href="/hydra.png" />
      </Head>

      <Login />
    </div>
  )
}

export default Home
