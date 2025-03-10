"use client";
import { examples } from "./consts";
import styles from "./styles.module.css";
import { Title, Card } from "@/components";
import { Slide } from "react-awesome-reveal";

export const Examples = () => {
  return (
    <section className={styles.examplesWrapper}>
      <div className={styles.examplesMask}>
        <Title title="Conoce nuestro trabajo" whiteColor />
        <Slide triggerOnce>
          <div className={styles.examples}>
            {examples.map((example) => (
              <Card key={example.id} cardContent={example} />
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
};
