import React from 'react';
import styles from './_salons.module.scss';
import Title from './Title/Title';

function Salons() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
      </p>
      <button className={styles.btn}>наши салоны</button>
    </div>
  )
}

export default Salons;