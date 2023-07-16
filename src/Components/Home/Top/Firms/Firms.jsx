import Firm from "./Firm/Firm";
import styles from './_firms.module.scss';

function Firms({ firms }) {
  return (
    <div className={styles.container_firms}>
      {firms.map((firm, ww) => (
        <Firm firm={firm} key={ww}/>
      ))}
    </div>
  )
}

export default Firms;