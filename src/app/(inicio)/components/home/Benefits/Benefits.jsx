"use client";
import styles from "./styles.module.css";
import { FaCheck } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";
import { Container, Title } from "@/components";

export const Benefits = () => {
  return (
    <Container>
      <Title title="¿Por qué elegir una invitación digital?" goldenColor />
      <div className={`${styles.benefitsListWrapper} borderRadius`}>
        <Slide triggerOnce>
          <ul className={styles.benefitsList}>
            <li className="borderRadius">
              <FaCheck /> Personalización completa
            </li>
            <li className="borderRadius">
              <FaCheck />
              Envío digital instantáneo
            </li>
            <li className="borderRadius">
              <FaCheck />
              Ubicación exacta de tu evento
            </li>
            <li className="borderRadius">
              <FaCheck />
              Mayor interactividad
            </li>
          </ul>
        </Slide>
        <div className={styles.separatorList}></div>
        <Slide triggerOnce>
          <ul className={styles.benefitsList}>
            <li className="borderRadius">
              <FaCheck />
              Diseños modernos
            </li>
            <li className="borderRadius">
              <FaCheck />
              Confirmación de asistencia
            </li>
            <li className="borderRadius">
              <FaCheck />
              Incluye fotos y videos
            </li>
            <li className="borderRadius">
              <FaCheck />
              Ahorro de papel
            </li>
          </ul>
        </Slide>
      </div>
    </Container>
  );
};
