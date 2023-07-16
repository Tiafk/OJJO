import styles from '../_usefulItem.module.scss';

function Card({ Item }) {
  return (
    <div className={styles.container}>
      <img src={Item.pichers} alt="#" />
      <p>{Item.text}</p>
    </div>
  );
}

export default Card;
