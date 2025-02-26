// import React from 'react';
import './Summary.css'

import { useLanguage } from '../contexts/Language';

function Summary() {
  const { isEnglish } = useLanguage();

  const enSummaryTitle = `
    American Craftsmanship, Legacy of Quality – Creating Your Ideal Dining Space
  `
  const enSummary = `
    With decades of experience in the industry, we deeply understand the art of dining space design.
    Proudly produced in the USA, our high-quality booths are tailor-made for restaurants, bars, and bistros, helping you effortlessly create a comfortable atmosphere and elevate your customers' dining experience.
    Whether you prefer modern minimalism or vintage elegance, our wide variety of booth styles fit your personalized needs. 
    From cozy and romantic two-seater booths to spacious and comfortable multi-person lounges, we provide seating solutions that perfectly align with your vision, without compromise, just perfection.
  `;

  const cnSummaryTitle =`
    美国匠心，品质传承——为您打造理想餐饮空间
    深耕行业多年，我们深谙餐饮空间设计之道`
  const cnSummary = `
    我们制造的一系列高品质展位，
    专为餐厅、酒吧和小酒馆量身定制，助您轻松营造舒适氛围，提升顾客用餐体验。
    无论您是追求现代简约，还是倾心复古优雅，我们丰富多样的展位款式都能满足您的个性化需求。
    从温馨浪漫的双人卡座到宽敞舒适的多人包厢，我们都能为您提供与您设想完美契合的座位方案，
    无需妥协，尽享完美。

    选择我们，是你明智的决定。
  `;

  return (
    <div className='summary'>
      <p className='title'>
        {isEnglish ? enSummaryTitle : cnSummaryTitle}
      </p>
      <p>
        {isEnglish ? enSummary : cnSummary}
      </p>
    </div>
  )
}

export default Summary;