import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <section className={styles.title}>
          <h1 style={{ color: "#bdbdbd" }}>PROJECT</h1>
          <h2 style={{ fontWeight: "bold" }}>LORUM</h2>
        </section>
        <div className={styles.edificio}>
          <Image
            src="/assets/Rectangle6.png"
            alt="Building"
            width={770}
            height={710}
          />
          {/* <div className={styles.button}>
            <Link href="/projects" className={styles.viewPro}>
              VIEW PROJECT <span className={styles.arrow}>→</span>
            </Link>
          </div> */}
        </div>
      </div>
      {/* HOlaa mundo */}

      <div className={styles.about}>
        <div className={styles.aboutImages}>
          <div className={styles.leftImages}>
            <Image
              src="/assets/Rectangle8.png"
              alt="Building 1"
              width={350}
              height={350}
              className={styles.topImage}
            />
            <Image
              src="/assets/Rectangle10.png"
              alt="Building 2"
              width={350}
              height={350}
              className={styles.bottomImage}
            />
          </div>
          <Image
            src="/assets/Rectangle9.png"
            alt="Building 3"
            width={520}
            height={710}
            className={styles.rightImage}
          />
        </div>
        <div className={styles.aboutContent}>
          <h2 style={{ color: "#bdbdbd", fontSize: "4rem", fontWeight: "300" }}>
            About
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link href="/" className={styles.readMore}>
            READ MORE <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>

      <div className={styles.mision}>
        <h1>Main Focus/Mission Statement</h1>
        <div className={styles.points}>
          <section className={styles.point}>
            <h2 style={{ fontSize: "100px", color: "#bdbdbd" }}>1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </section>
          <section className={styles.point}>
            <h2 style={{ fontSize: "100px", color: "#bdbdbd" }}>2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </section>
        </div>
      </div>

      <div className={styles.ourprojects}>
        <h1
          style={{
            color: "#bdbdbd",
            fontSize: "3rem",
            fontWeight: "300",
            marginBottom: "2rem",
          }}
        >
          Our Projects
        </h1>

        <div className={styles.parent}>
          <div className={styles.div1}>
            <Image
              src={"/assets/image15.png"}
              alt="projects"
              width={570}
              height={255}
            />
          </div>
          <div className={styles.div2}>
            <Image
              src={"/assets/image16.png"}
              alt="projects"
              width={570}
              height={255}
            />
          </div>
          <div className={styles.div3}>
            <Image
              src={"/assets/image17.png"}
              alt="projects"
              width={270}
              height={255}
            />
          </div>
          <div className={styles.div4}>
            <Image
              src={"/assets/image18.png"}
              alt="projects"
              width={470}
              height={255}
            />
          </div>
          <div className={styles.div5}>
            <Image
              src={"/assets/Rectangle17.png"}
              alt="projects"
              width={270}
              height={255}
            />
          </div>
        </div>
        <div className={styles.allp}>
          <Link href="/proyects" className={styles.allprojects}>
            ALL PROJECTS <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>

      <div className={styles.contactus}>
        <h1
          style={{
            color: "#bdbdbd",
            fontSize: "3rem",
            fontWeight: "300",
            marginBottom: "2rem",
          }}
        >
          Contact Us
        </h1>
        <div className={styles.contact}>
          {/* Formulario */}
          <section className={styles.formContainer}>
            <form className={styles.contactForm}>
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="phone" placeholder="Phone Number *" />
              <input type="email" name="email" placeholder="Email *" />
              <select name="interested">
                <option value="">Interested In</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Message *"
              ></textarea>
            </form>
            <Link href="/" className={styles.allprojects}>
              SEND EMAIL <span className={styles.arrow}>→</span>
            </Link>
          </section>

          {/* Imagen */}
          <section className={styles.contactImg}>
            <Image
              src="/assets/image12.png"
              alt="contact"
              width={570}
              height={255}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
