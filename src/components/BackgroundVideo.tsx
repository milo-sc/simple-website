// import React from 'react';
import './BackgroundVideo.css'

function BackgroundVideo() {
  return (
    <div>
      <video 
          poster='/home_images/brownTableSofas.jpeg' 
          autoPlay 
          muted 
          loop 
          playsInline 
          className='backgroundVideo'>
          <source src="/background.mp4" type="video/mp4"></source>
        </video>
    </div>
  )
}

export default BackgroundVideo;