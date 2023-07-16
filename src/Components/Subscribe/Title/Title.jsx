import styles from "../_subscribe.module.scss";

function Title() {
  return (
    <div className={styles.title}>
      <p className={styles.top}>Полезные советы и персональный предложения</p>
      <p>Эксклюзивная рассылка</p>
    </div>
  );
}

export default Title;
