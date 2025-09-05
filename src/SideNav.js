import React, { useState, useRef, useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const SideNav = ({sidenavRef,NavbarRef}) => {
    const [navItems, setNavItems] = useState([
        {
            id : 1,
            itemName: "My work",
            itemSelect: false,
            itemLink: '/mywork'
        },
        {
            id : 2,
            itemName: "Services",
            itemSelect: false,
            itemLink: '/services'
        },
        {
            id : 3,
            itemName: "Faq",
            itemSelect: false,
            itemLink: '/faq'
        },
        {
            id : 4,
            itemName: "About Us",
            itemSelect: false,
            itemLink: '/aboutus'
        },
        {
            id : 5,
            itemName: "Start a project",
            itemSelect: false,
            itemLink: '/fillform'
        }
    ])
    const handleclick = (id) =>{
        NavbarRef.current.classList.remove("changeBack")
        sidenavRef.current.classList.remove("showSide");
         const newArr = navItems.map(item => item.id === id ? {...item , itemSelect : true} : {...item , itemSelect : false})
         setNavItems(newArr)
         if(id === 5){
            NavbarRef.current.classList.add("changeBack")
           }
      }

      const handleClose = () =>{
        sidenavRef.current.classList.remove("showSide");
      }
  return (
    <div className='sidenav' ref={sidenavRef}>
      <div className="sideNavItems" onClick={handleClose}>
        <FaXmark />
        <span>Close</span>
      </div>
      <div className="sideNavItems">
      {navItems.map(item => (
            <Link to={item.itemLink} className={item.itemSelect ? 'selected' : null} key={item.id} onClick={() => handleclick(item.id)}>
            <div  className='NavbarItems'>{item.itemName}</div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default SideNav
