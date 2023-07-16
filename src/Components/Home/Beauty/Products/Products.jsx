import styles from '../_beauty.module.scss';

function Products(props) {
  return (
    <div className={styles.wrapper_box}>
      <img src={props.beauty.image} alt="#" />
      <p>{props.beauty.title}</p>
    </div>
  )
}

export default Products;