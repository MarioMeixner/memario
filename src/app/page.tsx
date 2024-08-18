import { Footer } from "antd/es/layout/layout";
import styles from "./page.module.scss";
import { Typography } from "antd";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>
      <Footer className={styles.footer}>
        <Typography>crafted with <b>Next.js</b> on 🌍</Typography>
      </Footer>
    </main>
  );
}
