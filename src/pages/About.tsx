// import React from 'react';
import './About.css';

import { useLanguage } from '../contexts/Language';

function About() {
  const { isEnglish } = useLanguage();
  
  const enAbout = `
  Every kind booth and table matched in all kinds of directions, including shapes, colors, materials, and designs.
  Many different choices are provided such as circular booth, single side booth, double side booth, long bench, the L-shaped, horizontal and vertical channel, headrool, OAK wood trimming, Formica trimming, the Formica frog-back type, OAK wood work or stainless steel button, anticipating to math with different skins and materials.
  Varieties of table tops also includes OAK wood side, plastic edge, Formica edge, electroplate edge, as well as different paints.
  The Formica also can be provided with wood grain with over hundreds of different colors and patterns.
  Our company also provides over hundreds of styles, such as the American style, Chinese style, Vietnamese style, Japanese style, European style as well as five-in-one table or chairs, completed with combinations of different variety of chairs.
  In order to gratify each and every one of our customers, we assure you the most reasonable price with the flexibility of choosing whatever design you have in mind, fulfilling your wishes as well as we can.
  `;
  const cnAbout = `
  各类展位及桌子均有各种款式，包括形状、颜色、材料及图案等。
  有圆形展位、单面展位、双面展位、长凳、L型、横竖通道、顶棚、橡木边条、福米卡边条、福米卡蛙背式、橡木制品或不锈钢扣等多种选择、可搭配不同皮料及材质。
  台面种类亦有橡木边条、塑料边条、福米卡边条、电镀边条及不同油漆。
  福米卡亦可提供木纹，颜色及图案多达上百种。
  本公司亦提供美式、中式、越南式、日式、欧式等上百种款式，以及五合一桌椅，可搭配不同款式的椅子组合。
  为了让每一位客户满意，我们保证以最合理的价格为您提供灵活选择您想要的设计，尽力满足您的愿望。
  `;

  return (
    <div className='about'>
      <h3>
        {isEnglish ? enAbout : cnAbout}
      </h3>
    </div>
    );
};

export default About;