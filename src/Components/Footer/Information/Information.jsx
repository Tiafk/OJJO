import styles from './_information.module.scss';
import Links from './Links/Links';
import Payment from './Payment/Payment';
import Contacts from './Contacts/Contacts';
import Online from './Online/Online';

function Information() {
  return (
    <div className={styles.information}>
      <Links />
      <Payment />
      <Contacts />
      <Online />
    </div>
  );
}

export default Information;