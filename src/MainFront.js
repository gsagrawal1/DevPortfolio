import React, { useRef } from 'react'
import videofront from './media/videoFront.mp4'
import { FaPlay, FaXmark } from 'react-icons/fa6';

const MainFront = ({NavbarRef}) => {
    const buttonRef = useRef(null)
    const videoRef = useRef(null)
    const escButtonRef = useRef(null)
    const handleclick = () => {
        buttonRef.current.classList.add("fullscreen");
        escButtonRef.current.style.display = "flex";
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
        document.body.style.overflow = 'hidden';
    }
    const handleclickEsc = () => {
        buttonRef.current.classList.remove("fullscreen");
        escButtonRef.current.style.display = "none";
        if (videoRef.current) {
            videoRef.current.muted = true;
        }
        document.body.style.overflow = 'auto';
        
    }
  return (
    <div className='MainFront'>
      <h1>
      We are a full-cycle agency that delivers turnkey projects,<br /> and by identifying the <a href=""  className='animateMainFrontHyperLink'>branding</a>, <br />
creating the <a href="" className='animateMainFrontHyperLink'> web design</a>, and <a href=""  className='animateMainFrontHyperLink'>mobile app</a> <br />
we turn it into a live product.
      </h1>
      <div className="videoDiv" ref={buttonRef}>
      <video src={videofront} autoPlay loop muted ref={videoRef}></video>
        <div className="videoButton" onClick={handleclick} >
            <FaPlay />
        </div>
        <div className="escButton" ref={escButtonRef} onClick={handleclickEsc}>
            <span><FaXmark /></span>
            <span>ESC</span>
        </div>
      </div>
    </div>
  )
}

export default MainFront
