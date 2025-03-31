import React from 'react'
import KidBannerImage from '../Assests/KidSectionBanner.webp'
import './KidBannerStyle.css'

const KidBanner = () => {
  return (
    <div className='kid-banner'>
        <img src={KidBannerImage} alt="kid banner" />

    </div>
  )
}

export default KidBanner