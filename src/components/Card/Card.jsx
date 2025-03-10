import Link from "next/link";
import styles from "./styles.module.css";

export const Card = ({ cardContent }) => {
  return (
    <>
      {!cardContent ? null : (
        <Link className={styles.cardWrapper} href={cardContent.link}>
          <figure className={styles.cardImage}>
            <img src={cardContent.image} />
          </figure>
          <span>{cardContent.title}</span>
        </Link>
      )}
    </>
  );
};
