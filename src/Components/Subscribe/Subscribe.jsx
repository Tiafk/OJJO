import Message from './Message/Message';
import Title from './Title/Title';
import styles from './_subscribe.module.scss';

function Subscribe() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Message/>
    </div>
  )
}

export default Subscribe;