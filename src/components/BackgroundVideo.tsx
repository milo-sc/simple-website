// import React from 'react';
import './BackgroundVideo.css'

function BackgroundVideo() {
  return (
    <div>
      <video
        autoPlay 
        muted 
        loop 
        playsInline
        className='backgroundVideo'>
        <source src="/background.mp4" type="video/mp4"></source>
      </video>

      {/* {hasVideoError && (
        <img
          src='/home_images/brownTableSofas.jpeg'
          alt='backup'
          className='backupImage'
        />
      )} */}
    </div>
  )
}

export default BackgroundVideo;