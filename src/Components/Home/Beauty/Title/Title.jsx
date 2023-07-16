import styles from "../../_home.module.scss";

function Title() {
  return (
    <div className={styles.title}>
      <p className={styles.top}>К мероприятиям</p>
      <p>Настоящая красота здесь!</p>
    </div>
  );
}

export default Title;
