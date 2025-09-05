import React, { useState, useRef, useEffect } from 'react'
import logo from './media/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'
const Navbar = ({NavbarRef, sidenavRef, setNavItems,navItems}) => {
   
    const [scrollDirection, setScrollDirection] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          // console.log(currentScrollPos)
          if (currentScrollPos > prevScrollPos) {
            setScrollDirection("down");
            NavbarRef.current.classList.add("hidenavbar");
            NavbarRef.current.classList.remove("shownavbar");
          } else if (currentScrollPos < prevScrollPos) {
            NavbarRef.current.classList.add("shownavbar");
            NavbarRef.current.classList.remove("hidenavbar");
            setScrollDirection("up");
          }
          setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [prevScrollPos]);

      const handleclick = (id) =>{
        NavbarRef.current.classList.remove("changeBack")
        window.scrollTo({
          'top' : 0,
          'behavior' : 'smooth'
        })
         const newArr = navItems.map(item => item.id === id ? {...item , itemSelect : true} : {...item , itemSelect : false})
         setNavItems(newArr)
         if(id === 5){
          NavbarRef.current.classList.add("changeBack")
         }
      }

      const handleclickLogo = () => {
        NavbarRef.current.classList.remove("changeBack")
        const newArr = navItems.map(item => ({ ...item, itemSelect: false }));
        setNavItems(newArr)
      }
   const handleMenuClick = () => {
    sidenavRef.current.classList.add("showSide");
   }
  return (
    <div className='Navbar' ref={NavbarRef}>
      <Link to='/' style={{textDecoration: "none", color: "inherit"}} onClick={handleclickLogo}>
      <div className="NavbarLeft">
        <img src={logo} alt="" />
        <span>Devpop</span>
      </div>
      </Link>
      <div className="NavbarRight">
      <div className="navbarMenu" onClick={handleMenuClick}>
            <FaBars />
          </div>
          {navItems.map(item => (
            <Link to={item.itemLink} className={item.itemSelect ? 'selected' : null} key={item.id} onClick={() => handleclick(item.id)}>
            <div  className='NavbarItems'>{item.itemName}</div>
            </Link>
          ))}
          
      </div>
    </div>
  )
}

export default Navbar
