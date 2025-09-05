import React, { useEffect, useRef, useState } from 'react'
import MyworkNav from './MyworkNav'
import AllWork from './AllWork'
import Branding from './Branding'
import Mobileapp from './Mobileapp'
import WebDesign from './WebDesign'
import Viewmore from './Viewmore'
import { Route, Routes } from 'react-router'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'
const Mywork = ({MywrokRef, NavbarRef,BackBlack,setNavItems,navItems}) => {
   const [currentId, setCurrentID] = useState([
    {
      id: '1',
      itemname: <AllWork />,
      itemSelected: true
    },
    {
      id: '2',
      itemname: <WebDesign />,
      itemSelected: false
    },
    {
      id: '3',
      itemname: <Mobileapp />,
      itemSelected: false
    },
    {
      id: '4',
      itemname: <Branding />,
      itemSelected: false
    }
   ]);
   useEffect(()=>{
    if(BackBlack){
    MywrokRef.current.classList.add("changeBack")
    const handleScroll =()=>{
       if(MywrokRef.current.getBoundingClientRect().top < 0  && !(MywrokRef.current.getBoundingClientRect().bottom <0)){
           NavbarRef.current.classList.add("changeBack")
       }
       else{
           NavbarRef.current.classList.remove("changeBack")
       }
    }
    window.addEventListener("scroll", handleScroll);
    return () =>{
       window.removeEventListener("scroll", handleScroll);
    }}
   },[])
   const [colorchange, setColorChange]  = useState(false);
  const handleclickViewMore = () =>{
    NavbarRef.current.classList.remove("changeBack")
    const newarr = navItems.map(item => item.id === 1 ? {...item, itemSelect : true} : {...item, itemSelect:false})
    setNavItems(newarr)
    setColorChange(true);
  }
   
  return (
    <div className={BackBlack ? 'MyworkDiv' : 'MyworkDiv makewhite'} ref={MywrokRef}>
      <MyworkNav currentId={currentId} setCurrentID={setCurrentID} />
      {currentId.map(item => item.itemSelected ? (
        <div key={item.id}>
        {item.itemname}
        </div>
        
      ):null)}
     <Link to='/mywork' onClick={handleclickViewMore} style={{textDecoration:"none"}}>
     <Viewmore navItems={navItems} colorchange={colorchange}/>
     </Link>
     
    </div>
  )
}

export default Mywork
