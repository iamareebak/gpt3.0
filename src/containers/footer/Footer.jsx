import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">

      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        {/* <a href="#requestaccess">Request Early Access</a> */}
        <p>Request Early Access</p>
      </div>


      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo ">
          <img src={gpt3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
            <p><a href="#">Overons</a></p>
            <p><a href="#">Social Media</a></p>
            <p><a href="#">Counters</a></p>
            <p><a href="#">Contact</a></p>
            {/* <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p> */}
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Company</h4>
            <p><a href="#">Terms & Conditions</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Contact</a></p>
            {/* <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p> */}
        </div>

        <div className="gpt3__footer-links-div">
          <h4>Get in touch</h4>
            <p className='no-point'>Crechterwoord K12 182 DK Alknjkcb</p>
            <p className='no-point'>085-132567</p>
            <p className='no-point'>info@payme.net</p>
            {/* <p><a href="#">Crechterwoord K12 182 DK Alknjkcb</a></p>
            <p><a href="#">085-132567</a></p>
            <p><a href="#">info@payme.net</a></p> */}
        </div>
      </div>

      <div className="gpt3__footer-disclaimer">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer