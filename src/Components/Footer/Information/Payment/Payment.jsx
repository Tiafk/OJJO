import styles from "../_information.module.scss";
import visa from "../../../../img/footer/visa.jpg";
import masterCard from "../../../../img/footer/master.jpg";

function Payment() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Оплата</div>
      <hr />
      <div className={styles.container}>
        <p className={styles.link}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
        <div className={styles.card}>
          <img src={visa} alt="visa" />
          <img src={masterCard} alt="masterCard" />
        </div>
      </div>
    </div>
  );
}

export default Payment;
