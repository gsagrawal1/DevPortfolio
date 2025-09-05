import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
const Animated = ({navItems, NavbarRef,setNavItems}) => {
  const animatedDivRef = useRef(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const handleScroll = ({setNavItems,navItems,NavbarRef}) => {
      if(animatedDivRef.current.getBoundingClientRect().top <= 300){
        animatedDivRef.current.classList.add("animateCirlce");
      }
    }
    window.addEventListener("scroll", handleScroll)

    return  () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])
  const handleclicklayer = () => {
    navigate("/fillform")
    NavbarRef.current.classList.add("changeBack")
    window.scrollTo({
      'top' : 0,
      'behavior' : 'smooth'
    })
    const newarr = navItems.map(item => item.id === 5 ? {...item, itemSelect : true} : {...item, itemSelect:false})
    setNavItems(newarr)
  }
  return (
    <div className='animatedDiv' ref={animatedDivRef}>
    <div className="animatedDivInner">
    <div className="circleList">
        <div className="circleListlayer" onClick={handleclicklayer}>  
            <span>Ready for magic?</span>
            <span>Drop us a line!</span>
            <span>
                <span></span>
                <FaArrowRight />
            </span>
        </div>
        <div className="cirlce-large"></div>
        <div className="cirlce-medium"></div>
        <div className="cirlce-small"></div>
      </div>
    </div>
     
    </div>
  )
}

export default Animated
