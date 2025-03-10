import styles from "./styles.module.css";
export const Title = ({ title, whiteColor, goldenColor }) => {
  if(whiteColor){
    return <h2 className={`${styles.titleWrapper} ${styles.whiteColor}`}>{title}</h2>
  }
  if(goldenColor){
    return <h2 className={`${styles.titleWrapper} ${styles.goldenColor}`}>{title}</h2>
  }
  return <h2 className={styles.titleWrapper}>{title}</h2>;
};
