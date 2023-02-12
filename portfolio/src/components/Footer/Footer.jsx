import React from 'react'
import './footer.css'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">Max</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <FiFacebook/> </a>
        <a href="https://instagram.com"> <BsInstagram/> </a>
        <a href="https://twitter.com"> <FiTwitter/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Max Tutorials. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer