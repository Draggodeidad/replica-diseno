import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./footer";
export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Diseno Replica</h1>
      </main>
      <Footer />
    </div>
  );
}
