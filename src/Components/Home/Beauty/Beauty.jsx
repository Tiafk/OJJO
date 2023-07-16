// import React, { useEffect, useRef, useState } from 'react'
import styles from './_beauty.module.scss';
import Products from './Products/Products';
import Navigation from './Navigation/Navigation';
import Title from './Title/Title';

function Beauty({ beauty }) {
  return (
    <div className={styles.container}>
      <Title />
      <Navigation />
      <div className={styles.wrapper}>
        {beauty.map((beauty, w) =>
        <Products beauty={beauty} key={w} />
        )}
      </div>
    </div>
  )
}

export default Beauty;