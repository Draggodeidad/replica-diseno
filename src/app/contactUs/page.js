import Image from "next/image";
import styles from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <h1 className={styles.ContactTitle}>Contact </h1>
      <h1>Information</h1>
      <main className={styles.main}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>Company Name</h2>
            <p>1234 Sample Street Austin Texas 76401</p>
            <p>512.333.2222</p>
            <p>sampleemail@gmail.com</p>
            <button className={styles.contactButton}>CONTACT US</button>
          </div>
          <div className={styles.mapContainer}>
            <Image
              src="/assets/image14.png"
              alt="Company Location in Austin"
              width={1440}
              height={443}
              className={styles.mapImage}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
