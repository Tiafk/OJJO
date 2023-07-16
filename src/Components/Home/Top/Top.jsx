import Firms from "./Firms/Firms";
import styles from "./_top.module.scss";
import topBack from "../../../img/Top/bgHome.png";
import Title from "./Title/Title";

function Top({ firms }) {
  return (
    <div className={styles.wrapper_top}>
      <img className={styles.background_img} src={topBack} alt="#" />
      <div className={styles.wrapper}>
        <Title />
        <hr className={styles.line} />
        <Firms firms={firms} />
      </div>
    </div>
  );
}

export default Top;
