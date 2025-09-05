import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCopyright } from 'react-icons/fa6'

const Footer = () => {
    const FooterRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
          if(FooterRef.current.getBoundingClientRect().top < 550){
            FooterRef.current.classList.add("animateFooter");
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className='footer' ref={FooterRef}>
      <div className="footerTop">
        <div className="footerTopLeft">
        <div className="footerTitle"><span>Contact</span></div>
        <div className="footerContactEmail">
        <a href="mailto:gsagrawal32@gmail.com">gsagrawal32@gmail.com</a>
        </div>
        <div className="footerContactAddress">
            <span>Chitkara University, Patiala, Punjab, India, 140401</span>
        </div>
        </div>
        <div className="footerTopRight">
        <div className="footerTitle"><span>Follow Us</span></div>
        <div className="followIcons">
            <span> <FaFacebook /></span>
            <span> <FaInstagram /></span>
            <span> <FaTwitter /></span>
            <span> <FaYoutube /></span>
         
        </div>

        </div>
      </div>
      <div className="footerBottom">
        <span>&copy; 2024, All rights are reserved</span>
      </div>
    </div>
  )
}

export default Footer
