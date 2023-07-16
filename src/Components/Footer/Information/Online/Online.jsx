import styles from "../_information.module.scss";
import youtube from "../../../../img/footer/YT.jpg";
import vk from "../../../../img/footer/vk.jpg";
import facebook from "../../../../img/footer/facebook.jpg";
import telegramm from "../../../../img/footer/tg.jpg";
import etsy from "../../../../img/footer/etsy.jpg";

function Online() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>социальные сети</div>
      <hr />
      <div className={styles.container}>
        <p className={styles.link}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
        <div className={styles.card}>
          <img src={youtube} alt="youtube" />
          <img src={vk} alt="vk" />
          <img src={facebook} alt="facebook" />
          <img src={telegramm} alt="telegramm" />
          <img src={etsy} alt="etsy" />
        </div>
      </div>
    </div>
  );
}

export default Online;
