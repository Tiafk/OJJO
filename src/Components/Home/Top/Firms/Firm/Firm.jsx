import style from './_firm.module.scss';

function Firm({ firm }) {
  return (
    <div className={style.container_firm}>
      <img src={firm.logo} alt="#" />
      {firm.hr}
    </div>
  )
}

export default Firm;