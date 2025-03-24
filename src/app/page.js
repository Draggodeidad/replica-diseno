import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./pages/footer";
import NavBar from "./pages/navBar";
export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main></main>
      <Footer />
    </div>
  );
}
