import styles from '../_top.module.scss';

function Title() {
  return (
    <div className={styles.container}>
      <p>Долго, дорого, богато!</p>
      <button className={styles.btn}>Каталог изделий</button>
    </div>
  );
}

export default Title;
