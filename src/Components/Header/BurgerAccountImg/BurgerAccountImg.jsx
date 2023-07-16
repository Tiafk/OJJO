import styles from "./_styles.module.scss";

function BurgerAccountImg() {
  return (
    <div className={styles.container_img}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="white" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.97342 4.59641C6.21857 0.341121 0.642853 2.65926 0.642853 7.29469C0.642853 10.7755 8.28685 16.2205 8.97342 16.9285C9.66471 16.2205 16.9286 10.7755 16.9286 7.29469C16.9286 2.69441 11.7334 0.341121 8.97342 4.59641Z" fill="white" />
      </svg>
    </div>
  );
}

export default BurgerAccountImg;
