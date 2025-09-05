import React, { useEffect, useRef, useState } from 'react'
import Animated from "./Animated";
import Footer from "./Footer";
const PageAbout = ({NavbarRef,BackBlack, navItems, setNavItems}) => {

    const imageref = useRef(null)
    const partnerref = useRef(null)
    useEffect(()=>{
        const childArray = Array.from(imageref.current.children);
        const handleScroll = () => {
            const top = imageref.current.getBoundingClientRect().top
            if(top > -150 && top < 300){
                childArray.forEach(item => {
                    Array.from(item.children).forEach(child => {
                        child.style.transform = "translateY(" + top  + "px)";
                      });
                })
            }

        }
        window.addEventListener("scroll", handleScroll)
        return () =>{
            window.removeEventListener("scroll", handleScroll)
        }
    })
    useEffect(()=>{
        if(BackBlack){
            partnerref.current.classList.add("changeBack")
        const handleScroll =()=>{
           if(partnerref.current.getBoundingClientRect().top < 0  && !(partnerref.current.getBoundingClientRect().bottom <0)){
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
  return (
    <>    
    <div className="pageDesc">
     <span>About Us</span>
    </div>
    <div className="imageDiv">
        <img src="https://emote.agency/wp-content/uploads/2021/09/main.jpeg" alt="" />
    </div>
    <div className="simpleDiv">
        <div className="simpleDivInner">
            <span>Simplicity</span>
            <span>Have you ever seen project people addicted to creativity? Not yet? Really?! Just look at this brilliant team. We are obsessed with quality and usability — not only with the creative part. People create the design for people — this is what we believe.</span><span> We do more than what is expected. Our work starts with a strategy designed to bring all brand initiatives, channels and activities together in a way that thrives. Our process is based on a collaborative client approach.</span>
        </div>
        <div className="simpleDivInner">
            <img src="https://emote.agency/wp-content/themes/emote/images/andrew+taras.jpeg" alt="" />
        </div>
    </div>
    <div className="imagesdiv" ref={imageref}>
        <div className="innerImage">
            <img src="https://emote.agency/wp-content/themes/emote/images/nastya_comp.jpg" alt="" />
        </div>
        <div className="innerImage">
            <img src="https://emote.agency/wp-content/themes/emote/images/dog.jpg" alt="" />
        </div>
        <div className="innerImage">
            <img src="https://emote.agency/wp-content/themes/emote/images/hand.jpg" alt="" />
        </div>
    </div>

    <div className="ourpartners" ref={partnerref}>
    <div className="ourpartnerinner">
    <div className="ourpartnerstop">
            <span>Our Stars</span>
        </div>
        <div className="ourpartnersBottom">
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2021/09/andrew.jpg" alt="" />
                <span>Andrey</span>
                <span>CEO</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2021/09/taras.jpg" alt="" />
                <span>Taras</span>
                <span>Art Director</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2021/09/alina.jpg" alt="" />
                <span>Alina</span>
                <span>Key Account Manager</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2024/07/Makar.jpg" alt="" />
                <span>Makar</span>
                <span>Sales manager</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2021/09/natasha.jpg" alt="" />
                <span>Natasha</span>
                <span>Project Manager</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2024/07/Max.jpg" alt="" />
                <span>Max</span>
                <span>Project Manager</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2021/09/nadya.jpg" alt="" />
                <span>Nadia</span>
                <span>Lead Designer</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2024/07/Misha.jpg" alt="" />
                <span>Mikhail</span>
                <span>Lead Designer</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2021/09/alyona.jpg" alt="" />
                <span>Alyona</span>
                <span>UX/UI Designer</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2024/07/Lilia.jpg" alt="" />
                <span>Lilia</span>
                <span>UX/UI Designer</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2024/07/Vika.jpg" alt="" />
                <span>Vika</span>
                <span>Motion Designer</span>
            </div>
            <div className="partnersCard">
                <img src="https://emote.agency/wp-content/uploads/2024/07/Kate.jpg" alt="" />
                <span>Kate</span>
                <span>Illustrator</span>
            </div>
        </div>
    </div>
       
    </div>
          <Animated navItems={navItems} setNavItems={setNavItems} NavbarRef={NavbarRef}/>
          <Footer />
    </>
  )
}

export default PageAbout
