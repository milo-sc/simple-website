// import React from 'react';
import './Summary.css'

import { useLanguage } from '../contexts/Language';

function Summary() {
  const { isEnglish } = useLanguage();

  const enSummaryTitle = `
    American Craftsmanship, Legacy of Quality – Creating Your Ideal Dining Space
  `
  const enSummary = `
    With decades of experience in the industry, we deeply understand the art of dining space design. Our high-quality booths, proudly made in the USA, are tailor-made for restaurants, bars, and bistros, helping you effortlessly create a comfortable atmosphere and elevate your customers' dining experience.
    Whether you prefer modern minimalism or vintage elegance, our wide variety of booth styles can meet your personalized needs. From cozy and romantic two-seater booths to spacious and comfortable multi-person lounges, we can provide seating solutions that perfectly align with your vision, without compromise, just perfection.
  `;

  const cnSummaryTitle =`
    美国匠心，品质传承——为您打造理想餐饮空间
    深耕行业多年，我们深谙餐饮空间设计之道`
  const cnSummary = `
    我们美国制造的一系列高品质展位，
    专为餐厅、酒吧和小酒馆量身定制，助您 轻松营造舒适氛围，提升顾客用餐体验。
    无论您是追求现代简约，还是倾心复古优雅，我们丰富多样的展位款式都能满足您的个性化需求。
    从温馨浪漫的双人卡座到宽敞舒适的多人包厢，我们都能为您提供与您设想完美契合的座位方案，
    无需妥协，尽享完美。

    选择我们，您将获得：
  `;
  
  // const enSummaryHomeEnd = `
  //   Contact us today to learn more and schedule a visit to explore our booth collection! 
  //   Let us use our professional expertise and exceptional service to create a memorable dining space for you, attract more customers, and enhance your brand value!
  // `
  // const cnSummaryHomeEnd = `
  //   立即联系我们，了解更多信息，并预约参观我们的展位系列！ 
  //   让我们用专业的经验和优质的服务，为您打造令人难忘的餐饮空间，吸引更多顾客，提升您的品牌价值！
  // `

  return (
    <div>
      <pre className='summaryTitle'>
        {isEnglish ? enSummaryTitle : cnSummaryTitle}
      </pre>
      <pre className='summary'>
        {isEnglish ? enSummary : cnSummary}
      </pre>
    </div>
  )
}

export default Summary;