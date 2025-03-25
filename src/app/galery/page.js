import Image from "next/image";
import styles from "./galery.module.css";

const images = [
  "/assets/Rectangle22.png",
  "/assets/Rectangle23.png",
  "/assets/Rectangle24.png",
  "/assets/Rectangle25.png",
  "/assets/Rectangle26.png",
  "/assets/Rectangle27.png",
  "/assets/Rectangle28.png",
  "/assets/Rectangle29.png",
  "/assets/Rectangle30.png",
  "/assets/Rectangle31.png",
];

export default function Galery() {
  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryTitle}>Photo</h1>
      <h1 className={{}}>Gallery</h1>
      <hr className={styles.customLine}></hr>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={210}
              height={260}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.pageIndicator}>01 / 05</div>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton}>←</button>
          <button className={styles.navButton}>→</button>
        </div>
      </div>
    </div>
  );
}
