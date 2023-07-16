import styles from './_styles.module.scss';
import youtube from '../../../img/Top/carbon_logo-youtube.svg';
import vk from '../../../img/Top/entypo-social_vk.svg'
import facebook from '../../../img/Top/bx_bxl-facebook.svg'
import telegram from '../../../img/Top/bx_bxl-telegram.svg'
import etsy from '../../../img/Top/simple-icons_etsy.svg'

function BurgerContacts() {
  return (
    <div className={styles.container}>
      <img src={youtube} alt="youtube" />
      <img src={vk} alt="vk" />
      <img src={facebook} alt="facebook" />
      <img src={telegram} alt="telegram" />
      <img src={etsy} alt="etsy" />
    </div>
  )
}

export default BurgerContacts;