import styles from "./_message.module.scss";
import MessageInput from "./MessageInput/MessageInput";
import Text from "./Text/Text";

function Message() {
  return (
    <div className={styles.wrapper}>
      <Text />
      <MessageInput />
    </div>
  );
}

export default Message;
