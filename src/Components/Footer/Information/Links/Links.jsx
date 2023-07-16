import styles from "../_information.module.scss";

function Links() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Полезные ссылки</div>
      <hr />
      <div className={styles.container}>
        <a href="#" className={styles.link}>
          Доставка
        </a>
        <a href="#" className={styles.link}>
          Оплата{" "}
        </a>
        <a href="#" className={styles.link}>
          Акции
        </a>
        <a href="#" className={styles.link}>
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
}

export default Links;
