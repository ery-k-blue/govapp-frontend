// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>GovApp</title>
//         <meta name="description" content="toppage of govapp" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1>Welcome to GovApp!</h1>
//       </main>

//     </div>
//   )
// }

import type { NextPage } from 'next'
import { Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <Button variant="contained">Hello World</Button>
    </>
  )
}

export default Home