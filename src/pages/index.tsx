import Head from "next/head";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GovApp</title>
        <meta name="description" content="toppage of govapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to GovApp!</h1>
        <Button href="ranking/QuestionNum">
          Go to Ranking Page <ArrowForwardIcon />
        </Button>
      </main>
    </div>
  );
}
