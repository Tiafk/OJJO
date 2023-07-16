import styles from "./_usefulItem.module.scss";
import Card from "./Card/Card";

function UsefuItem({ UsefulCard }) {
  return (
    <div className={styles.wrapper_card}>
      <div className={styles.blocks}>
        {UsefulCard.map((Item, w) => (
          <Card Item={Item} key={w} />
        ))}
      </div>
      <button className={styles.btn}>Читать наш блог</button>
    </div>
  );
}

export default UsefuItem;
