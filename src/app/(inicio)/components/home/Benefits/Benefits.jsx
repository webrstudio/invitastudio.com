"use client";
import styles from "./styles.module.css";
import { Slide } from "react-awesome-reveal";
import { FaCircleCheck } from "react-icons/fa6";
import { Container, Title } from "@/components";

export const Benefits = () => {
  return (
    <Container>
      <Title title="¿Por qué elegir una invitación digital?" goldenColor />
      <Slide triggerOnce>
        <ul className={`${styles.benefitsList} borderRadius`}>
          <li className={styles.borderRight}>
            <FaCircleCheck /> <span>Fácil de compartir</span>
          </li>
          <li>
            <FaCircleCheck /> <span>Mayor interactividad</span>
          </li>
          <li className={styles.borderRight}>
            <FaCircleCheck /> <span>Ahorro de papel</span>
          </li>
          <li>
            <FaCircleCheck /> <span>Ubicación exacta</span>
          </li>
          <li className={styles.borderRight}>
            <FaCircleCheck /> <span>Galería de fotos</span>
          </li>
          <li>
            <FaCircleCheck /> <span>Botones de asistencia</span>
          </li>
          <li className={styles.borderRight}>
            <FaCircleCheck />
            <span>Videogalería</span>
          </li>
          <li>
            <FaCircleCheck />
            <span>Reducción de costos</span>
          </li>
        </ul>
      </Slide>
    </Container>
  );
};
