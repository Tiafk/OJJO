import styles from "./_footer.module.scss";
import Information from "./Information/Information";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.restrictions}>
        <Information />
        <hr />
        <div className={styles.container}>
          <p className={styles.bot}>(c) 2020 OJJO jewelry</p>
          <p className={styles.bot}>Договор публичной офферты</p>
          <p className={styles.bot}>Контрагентам</p>
          <p className={styles.bot}>Сделано Figma.info</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
