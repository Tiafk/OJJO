import styles from "../_beauty.module.scss";
import NavButton from "./NavButton/NavButton";

function Navigation() {
  return (
    <ul className={styles.navigation}>
      <NavButton
        text='свадьба'
        defaultActive 
      />
      <NavButton
        text='мужу'
      />
      <NavButton
        text='жене'
      />
      <NavButton
        text='партнеру'
      />
      <NavButton
        text='коллекции'/>
      <NavButton
        text='редкость'
      />
    </ul>
  );
}

export default Navigation;
