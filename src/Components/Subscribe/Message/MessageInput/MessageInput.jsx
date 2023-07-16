import styles from "./_messageInput.module.scss";

function MessageInput() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input type="text" placeholder="ваш email" />
        <button>отправить</button>
      </div>
    </div>
  );
}

export default MessageInput;