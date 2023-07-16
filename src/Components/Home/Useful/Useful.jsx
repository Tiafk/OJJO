import UsefuItem from './UsefuItem/UsefuItem';
import styles from './_useful.module.scss';

function Useful( {UsefulCard} ) {
  return (
    <div className={styles.wrapper_useful}>
      <div className={styles.title}>
        <p className={styles.top_title}>Полезные статьи</p>
        <p className={styles.sub_title}>Лучшие советы по подбору дорогих подарков</p>
      </div>
      <UsefuItem UsefulCard={UsefulCard}/>
    </div>
  )
}

export default Useful;