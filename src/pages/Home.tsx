// import React from "react";
import './Home.css';

import { Link } from 'react-router-dom';

import { useLanguage } from '../contexts/Language';

import Summary from '../components/Summary';
import CaptionedImage from '../components/CaptionedImage';

import BlueSofaAndChairs from '../images/blueSofaAndChairs.jpg';
import BrownTableSofas from '../images/brownTableSofas.jpeg';
import BrownUTableSofas from '../images/brownUTableSofas.jpg';
import WhiteUTableSofas from '../images/whiteUTableSofas.jpg';
import GreenSofa from '../images/greenSofa.jpg';

function Home() {
  const { isEnglish } = useLanguage();

  return (
    <div>
      <div style={{height: '20vh'}}></div>

      {/* Middle Part */}
      <div style={{height: '15vh'}}> 
        <div className="home">
          <p>{isEnglish ? 'New collection on display' : '全新系列展示'}</p>
        </div>

        <div className='homeBorder'>
          <Link to="/Booths" className='homeLink'>{isEnglish ? 'Explore' : '探索'}</Link>
        </div>
      </div>
     
      <div style={{height: '35vh'}}></div>

      <span style={{color: 'white'}} >↓</span>

      <div style={{height: '15vh'}}></div>

      {/* Short Description */}
      <Summary />

      {/* Captioned Images */}
      <div className='imageCaptionedContainer'>
        <CaptionedImage 
          source={BlueSofaAndChairs}
          alt='Unmatched Comfort, Exquisite Design'
          className='landscapeImage'
          enTitle='Unmatched Comfort, Exquisite Design' 
          cnTitle='极致舒适，精美绝伦'
          enDescription='Ergonomically designed to provide customers with a comfortable dining experience.'
          cnDescription='符合人体工学的设计，为顾客提供舒适的用餐体验。'
          />
        <CaptionedImage 
          source={BrownTableSofas}
          alt='Meticulous Craftsmanship, Uncompromising Quality'
          className='landscapeImage'
          enTitle='Meticulous Craftsmanship, Uncompromising Quality' 
          cnTitle='匠心工艺，精益求精'
          enDescription='We insist on American manufacturing, using premium materials and expert craftsmanship, with every detail reflecting our commitment to quality.'
          cnDescription='我们坚持美国制造，精选优质材料，精湛工艺打造，每一个细节都彰显着我们对品质的执着追求。'
          />
      </div>
      <div className='imageCaptionedContainer'>
        <CaptionedImage 
          source={BrownUTableSofas}
          alt='Years of Experience, Trustworthy Expertise'
          className='portraitImage'
          enTitle='Years of Experience, Trustworthy Expertise' 
          cnTitle='多年经验，值得信赖'
          enDescription='With decades of industry experience, we know how to create durable, comfortable, and visually appealing booths to safeguard your dining space.'
          cnDescription='凭借多年行业经验，我们深知如何打造经久耐用、舒适美观的展位，为您的餐饮空间保驾护航。'
          />
        <CaptionedImage 
          source={WhiteUTableSofas}
          alt='Diverse Styles, Customized Solutions'
          className='portraitImage'
          enTitle='Diverse Styles, Customized Solutions' 
          cnTitle='风格多样，量身定制'
          enDescription='We offer a wide range of styles, colors, and materials for our booths, and can provide personalized customization based on your needs, helping you create a one-of-a-kind dining space.'
          cnDescription='我们提供多种款式、颜色和材质的展位选择，并可根据您的需求进行个性化定制，助您打造独一无二的餐饮空间。'
          />
      </div>
      <CaptionedImage 
        source={GreenSofa}
        alt='Transparent Pricing, High Cost-Effectiveness'
        className='portraitImage'
        enTitle='Transparent Pricing, High Cost-Effectiveness' 
        cnTitle='价格透明，性价比高'
        enDescription='We adhere to transparent pricing and honest business practices, offering high-quality booths at affordable prices, helping you easily achieve a return on investment.'
        cnDescription='我们坚持透明定价，诚信经营，以实惠的价格为您提供高品质的展位，助您轻松实现投资回报。'
        />
    </div>
  )
}

export default Home;