"use client";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";

export const Jumbotron = () => {
  return (
    <section className={styles.jumbotronWrapper}>
      <div className={styles.jumbotronMask}>
        <div className={`${styles.jumbotronElements} flexContainer`}>
          <Slide triggerOnce>
            <div className={styles.jumbotronImage}>
              <img src="/assets/images/jumbotron.png" />
            </div>
            <div className={styles.jumbotronTitles}>
              <h1>
                <span className={styles.markupLetter}>
                  ¡Un click para invitar,{" "}
                </span>
                un recuerdo para toda la vida!
              </h1>
              <h2>Invitaciones digitales para toda ocasión</h2>
              <a
                href="https://www.youtube.com/@losmesmosshow"
                target="_blank"
                className={`${styles.jumbotronButton} borderRadius`}
              >
                <span>¡Quiero mi invitación!</span>
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};
