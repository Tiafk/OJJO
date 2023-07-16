import Media from './Media/Media';
import Title from './Title';
import styles from './_socialMedia.module.scss';

function SocialMedia() {
  return (
    <div className={styles.wrapper_media}>
      <Title />
      <Media />
    </div>
  )
}

export default SocialMedia;