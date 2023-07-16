import styles from "../_header.module.scss";

function BurgerMenu({onClickBurger}) {
  return (
    <div className={styles.burger} onClick={onClickBurger}>
      <span className={styles.burger_line}></span>
      <span className={styles.burger_line}></span>
      <span className={styles.burger_line}></span>
    </div>
  );
}

export default BurgerMenu;
