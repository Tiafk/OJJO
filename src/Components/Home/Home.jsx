import React, { useState } from 'react';
import styles from './_home.module.scss';
import firm from '../../img/Top/firm.png';
import Top from './Top/Top';
import Beauty from './Beauty/Beauty';
import Salons from './Salons/Salons';
import Useful from './Useful/Useful';

// ----------- img Beauty ---------------

import rings from '../../img/Beauty/rings.png';
import earrings from '../../img/Beauty/earrings.png';
import pendants from '../../img/Beauty/pendants.png';
import cufflinks from '../../img/Beauty/cufflinks.png';
import bracelets from '../../img/Beauty/bracelets.png';
import watch from '../../img/Beauty/watch.png';

// ----------- img Useful ---------------

import UsefulWatch from '../../img/Useful/1.png';
import Usefulcufflinks from '../../img/Useful/2.png';
import UsefulRings from '../../img/Useful/3.png';
import SocialMedia from './SocialMedia/SocialMedia';

// -------------------------------

function Home() {

  const [firms] = useState([
    {logo: firm, hr: <hr/>},
    {logo: firm, hr: <hr/>},
    {logo: firm, hr: <hr/>},
    {logo: firm, hr: <hr/>},
    {logo: firm, hr: <hr/>},
    {logo: firm}
  ])

  const [beauty, setbeauty] = useState([
    {image:rings, title:'Кольца'},
    {image:earrings, title:'серьги'},
    {image:pendants, title:'подвески'},
    {image:cufflinks, title:'запонки'},
    {image:bracelets, title:'браслеты'},
    {image:watch, title:'часы'},
  ])

  const [UsefulCard] = useState ([
    {pichers:UsefulWatch,text:'Как выбрать часы для своей будущей жены'},
    {pichers:Usefulcufflinks,text:'Запонки для мужа: 7 ключевых правил покупки аксессуара'},
    {pichers:UsefulRings,text:'Как выбрать обручальные кольца молодоженам'}
  ])

  return (
    <div className={styles.wrapper}>
      <Top firms={firms}/>
      <Beauty beauty={beauty}/>
      <Salons />
      <Useful UsefulCard={UsefulCard}/>
      <SocialMedia/>
    </div>
  )
}

export default Home;