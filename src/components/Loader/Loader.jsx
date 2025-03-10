import styles from "./styles.module.css";

export const Loader = ({ fullScreen }) => {
  return (
    <section
      className={`${styles.loaderWrapper} ${
        !fullScreen ? "" : styles.loaderWrapperFullScreen
      }`}
    >
      <img src="/assets/images/logo.png" />
      <div className={styles.loaderProgressBar}></div>
    </section>
  );
};
