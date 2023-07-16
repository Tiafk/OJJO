import { useEffect, useRef, useState } from "react";
import clickDropOutside from '../../active';
import styles from "../../_beauty.module.scss";

function NavButton(props) {
  const [select, setSelect] = useState(props.defaultActive || false);
  const selectRef = useRef(null);

  useEffect(() => {
    clickDropOutside(selectRef, setSelect, false);
  }, []);

  return (
    <li className={`${styles.link} ${select ? styles.active : ''}`} onClick={() => setSelect(!select)} ref={selectRef}>
      <div className={styles.text}>{props.text}</div>
      <span className={styles.back}></span>
    </li>
  );
}

export default NavButton;
