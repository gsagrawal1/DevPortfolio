import React, { Children, useEffect, useRef } from 'react'
import Animated from "./Animated";
import Footer from "./Footer";
import geo1 from "./media/geo1.png";
import geo2 from "./media/geo2.png";
import geo3 from "./media/geo3.png";
import geo4 from "./media/geo4.png";
import geo5 from "./media/geo5.png";
import geo6 from "./media/geo6.png";
const PageServices = ({NavbarRef, navItems, setNavItems}) => {
    const parentDivRef = useRef(null);

    useEffect(()=>{
        const childArray = Array.from(parentDivRef.current.children)
            const handleScroll = () =>{
                let count =0 ;
                childArray.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                if(item.getBoundingClientRect().top < 500){
                    setTimeout(() =>{
                        item.classList.add('animatethisdiv');
                    }, 300 * count)
                }
                count +=1;
                if(count > 1){
                    count = 0;
                }
            })
            }
           
       
        window.addEventListener("scroll", handleScroll);

        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    })
  return (
    <>
        <div className="pageDesc">
        <span>Services</span>
        </div>

        <div className="serviceTop">
            <div className="serviceTopinner" id='serviceTopUp'>
                <div className="serviceTopinnerChild"><span>What we do</span></div>
                <div className="serviceTopinnerChild"><span>The creative process is a combination of analysis and magic. We are making appealing and client-oriented projects from scratch, based on our expertise and your vision.</span></div>
            </div>
            <div className="serviceTopinner" id='serviceTopBelow'>
                <div className="serviceTopinnerChild"><span>MVP</span><span>The minimum viable product can have minimum functionality, but it should look like fully completed product. Now you will know whether your project will explode on the market or not.</span></div>
                <div className="serviceTopinnerChild"><video src="https://emote.agency/wp-content/uploads/2021/10/3.mp4" autoPlay loop muted></video></div>
            </div>
            <div className="serviceTopinner" id='serviceTopDown' ref={parentDivRef}>
            <div className="serviceTopinnerChild">
                <span><img src={geo1} alt="" /></span>
                <span>UI/UX design</span>
                <span>The success of the product is the client-oriented experience of using and attractive interface — how fast and neat can user experience be? We can predict it.</span>
            </div>
            <div className="serviceTopinnerChild">
                <span><img src={geo2} alt="" /></span>
                <span>Illustration</span>
                <span>Let’s add even more uniqueness to your design with custom illustrations and cons. No more stock standard feeling — only pure creativity and emotions related to you.</span>
            </div>
            <div className="serviceTopinnerChild">
                <span><img src={geo3} alt="" /></span>
                <span>Motion</span>
                <span>Let’s shake up the world together. Put some motion and dynamics into you digital products. People are tired from static and non interactive things. Let us bring some Liveliness into it.</span>
            </div>
            <div className="serviceTopinnerChild">
                <span><img src={geo4} alt="" /></span>
                <span>3D</span>
                <span>You are too tired of flat and common illustrations or want to show all your products with no photo shooting? No more words. We got you — catch on the 3d Items.</span>
            </div>
            <div className="serviceTopinnerChild">
                <span><img src={geo5} alt="" /></span>
                <span>Branding</span>
                <span>Identify your product from the others by your unique specific sign and raise your brand recognition in your environment. If you have an idea, we extend it and bring value into it.</span>
            </div>
            <div className="serviceTopinnerChild">
                <span><img src={geo6} alt="" /></span>
                <span>Development</span>
                <span>Do you know how to make the project come to life? The deployment of the design will be pixel-perfect made by our Dev team. And the support? It will be constant and smooth.</span>
            </div>
            </div>
        </div>
        <Animated navItems={navItems} setNavItems={setNavItems} NavbarRef={NavbarRef}/>
        <Footer />
    </>
  )
}

export default PageServices
