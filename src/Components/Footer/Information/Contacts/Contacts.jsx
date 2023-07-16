import styles from "../_information.module.scss";
import phone from "../../../../img/footer/phone.jpg";
import mail from "../../../../img/footer/mail.jpg";

function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>контакты</div>
      <hr />
      <div className={styles.container}>
        <div className={styles.link}>
          <img src={phone} alt="phone" />
          <p>8 (812) 234-56-55</p>
        </div>
        <div className={styles.link}>
          <img src={phone} alt="phone" />
          <p>8 (812) 234-56-55</p>
        </div>
        <div className={styles.link}>
          <img src={mail} alt="mail" />
          <p>ojjo@ojjo.ru</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
