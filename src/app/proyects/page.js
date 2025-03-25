import Image from "next/image";
import styles from "./proyects.module.css";

const projectsData = [
  {
    title: "Sample Project",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/image30.png",
  },
  {
    title: "Sample Project 2",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/image32.png",
  },
  {
    title: "Sample Project 3",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/assets/image33.png",
  },
];

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.ProyectTitle}>Our </h1>
      <h1 className={{}}>Projects</h1>
      <hr className={styles.customLine}></hr>
      <main className={styles.main}>
        <div className={styles.projectsContainer}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={670}
                  height={435}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectDetails}>
                <h2 className={styles.projectSubtitle}>{project.title}</h2>
                <p>{project.description}</p>
                <a href="#" className={styles.viewMoreLink}>
                  VIEW MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
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
