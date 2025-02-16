import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>QuickMeal is your go-to platform for fast, fresh, and delicious meals delivered right to your doorstep. Whether you’re craving local favorites or international cuisines, we’ve got you covered!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 98765 43210</li>
            <li>support@quickmeal.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2025 © QuickMeal. All rights reserved.
      </p>
    </div>
  )
}

export default Footer