import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./footer";
import NavBar from "./navBar";
export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main></main>
      <Footer />
    </div>
  );
}
