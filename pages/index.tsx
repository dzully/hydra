import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from './Login'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Insurare</title>
        <meta name="description" content="Smart Insurance" />
        <link rel="icon" href="/hydra.png" />
        <link
          href="https://unpkg.com/maplibre-gl@2.1.7/dist/maplibre-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Login />
    </div>
  )
}

export default Home
