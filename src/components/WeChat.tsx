// import React from 'react';
import './WeChat.css';

import { useLanguage } from "../contexts/Language";

function WeChat() {
  const { isEnglish } = useLanguage();
  
  return (
    <div className='weChat'>
      <span className='title'> {isEnglish ? 'WeChat' : ' 微 信'} </span>
      <img src='/footer_images/wechat.png' alt='WeChat Code' className='code'/>
    </div>
  )
}

export default WeChat;