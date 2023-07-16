import styles from './_text.module.scss';

function Text() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="subscribe__icon">
            <path id="Polygon 1" d="M11 8.5L7.25 10.6651L7.25 6.33494L11 8.5Z" fill="white" />
            <path id="Polygon 2" d="M4.75 2.00481L16 8.5L4.75 14.9952L4.75 2.00481Z" stroke="white" />
          </g>
        </svg>
        <p>Личный менеджер</p>
      </div>
      <div className={styles.container}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="subscribe__icon">
            <path id="Polygon 1" d="M11 8.5L7.25 10.6651L7.25 6.33494L11 8.5Z" fill="white" />
            <path id="Polygon 2" d="M4.75 2.00481L16 8.5L4.75 14.9952L4.75 2.00481Z" stroke="white" />
          </g>
        </svg>
        <p>Доставка и оформление</p>
      </div>
      <div className={styles.container}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="subscribe__icon">
            <path id="Polygon 1" d="M11 8.5L7.25 10.6651L7.25 6.33494L11 8.5Z" fill="white" />
            <path id="Polygon 2" d="M4.75 2.00481L16 8.5L4.75 14.9952L4.75 2.00481Z" stroke="white" />
          </g>
        </svg>
        <p>Индивидуальный дизайн</p>
      </div>
    </div>
  );
}

export default Text;
