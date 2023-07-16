import styles from './_burger_list.module.scss';

function BurgerList() {
  return (
    <ul className={styles.burger_list}>
      <li>Контрагентам</li>
      <li>Дизайнерам</li>
      <li>Вакансии</li>
      <li>Вход/Регистрация</li>
    </ul>
  )
}

export default BurgerList;