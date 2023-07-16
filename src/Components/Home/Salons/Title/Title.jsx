import styles from "../_salons.module.scss";

function Title() {
  return (
    <div className={styles.title}>
      <p className={styles.top}>Не знаете, что выбрать?</p>
      <p>Посетите наши салоны в Москве</p>
    </div>
  );
}

export default Title;
