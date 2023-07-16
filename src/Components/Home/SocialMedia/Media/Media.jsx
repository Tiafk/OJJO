import styles from "../_socialMedia.module.scss";
import ring from "../../../../img/Social/1.png";
import glasses from "../../../../img/Social/2.png";
import stone from "../../../../img/Social/3.png";
import ring2 from "../../../../img/Social/4.png";
import watch from "../../../../img/Social/5.png";
import hands from "../../../../img/Social/6.png";
import play from "../../../../img/Social/play.svg";

function Media() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img_container}>
          <img src={ring} alt="#" />
          <img className={styles.play} src={play} alt="#" />
        </div>
        <div className={styles.img_container}>
          <img src={glasses} alt="#" />
          <img src={stone} alt="#" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.img_container}>
          <img src={ring2} alt="#" />
          <img src={watch} alt="#" />
        </div>
        <div className={styles.img_container}>
          <img src={hands} alt="#" />
          <img className={styles.play} src={play} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Media;
