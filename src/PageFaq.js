import React, { useEffect, useRef, useState } from 'react'
import Animated from "./Animated";
import Footer from "./Footer";
import { FaMinus } from 'react-icons/fa6';
const PageFaq = ({NavbarRef, navItems, setNavItems}) => {

    const [faqItems, setFaqItems] = useState([
        {
            id : 1,
            itemQue :"What’s the minimum amount of content you need to start new collaborations (draft of what’s going to be there, or full content, or something in between)?",
            itemAns: "We can start with nothing, just with an understanding of the amount of block and what you want to show in terms of information. Based on the design, we will pace lorem Ipsum and we will provide you with the exact amount of lines/symbols which will fit perfectly to the design. If you have part of the content it is also helpful, and if you have everything prepared — amazing. We are happy with as much content as you have.",
            itemSelected  : false
        },
        {
            id : 2,
            itemQue :"What about your process?",
            itemAns: "Our process is very transparent and clear: You sign the form and we will contact you. Then you fill in the Typeform and set up the call with our manager. If all the required information is ready for the estimation — you will get a break down with the detailed information about the time/money turnaround for your project. If you are good to go with the rates and deadlines, we sign 2 contracts — Master agreement and Specification.You add 50% deposit and we have a kickoff meeting with your and our team to dive into your project together. Next stage is Research — Style and UX where we define and discuss with you solutions which can best suit you, so some of this is just a question of your personal taste. The next stage is User flow, we will build for you the most common and user-oriented flows for each scenario. Next would be the UX stage where we create for you low-fidelity black and white wireframes and prototype, so you can test and feel the usability of your project even on this stage. The UI stage will be stated only once you approve the UX. For the first screen, you will get 2 different versions based on the style you’ chosen previously and once it is confirmed, we will apply that skin to the rest of the project. Now it’s time to work on illustrations and the last part is an animation for you. And once you are happy with everything, you will get the source files depending on what we agreed with you from the very beginning. Afterwards, Design support can also be added to the scope if you are not sure in your Development Team.",
            itemSelected  : false
        },
        {
            id : 3,
            itemQue :"Why Does Your Startup Need MVP?",
            itemAns:"Each StartUp wants to get the investment because it’s a professional standard that business people believe in. MVP helps indicate to investors that you are ready with your idea — it could be raw, but you at least did something to make your project alive, you risked your own money, so they should do it as well. Also MVP shows in real life how actually your ideas are working — it’s a professional stage of concept.",
            itemSelected  : false
        },
        {
            id : 4,
            itemQue :"What’s the turnaround time for starting a new project?",
            itemAns:"This depends on the workload. Usually, it will take from 2 days up to 1 week from the estimation date to kick-off meeting, including documentary and negotiations stage.",
            itemSelected  : false
        },
        {
            id : 5,
            itemQue:"How long will it take to get an estimate from you?",
            itemAns:"Typically we provide estimate in two business day after receiving all the necessary information from you. Sometimes it takes longer due to the volume of work, but you will be notified about that beforehand.",
            itemSelected  : false
        },
        {
            id : 6,
            itemQue:"Can we start the design without structure / wireframes?",
            itemAns:"Yes, we can. We will identify it during the research and user flow stage and agreed on this with you so you know the exact structure and amount of screen or pages before the UX stage. Also, we can discuss with you and make a revision of it to get the final structure done before the UI part starts.",
            itemSelected  : false
        },
        {
            id:7,
            itemQue:"Are you limiting feedback (ie do we have specific rounds of revision)?",
            itemAns:"Since during our collaboration every stage is approved before we move to the next one, we provide an additional 5% for revisions. Usually before a stage gets approval, it takes 2 rounds of revision. So this is more than enough to deliver the project which will make you happy.",
            itemSelected:false
        },
        {
            id:8,
            itemQue:"How many people are working on the project?",
            itemAns:"Normally on every project we involve: Project manager, who manage the all whole process; UX/UI designer; illustrator and Motion designer, all the work is going thought the revision of lead designer and if its needed — and the Art director can also participate.",
            itemSelected:false
        },
        {
            id:9,
            itemQue:"Do you outsource anything from the project or is your team fully in-house?",
            itemAns:"Everything you can see on our portfolio is made by Taras Migulko and the team. We fully cover with our in-house capacity every single part of the project — from UX to animation. Nothing is outsourced.",
            itemSelected:false
        },
        {
            id:10,
            itemQue:"Are you presenting reports (ie. weekly progress)? If so, how often and what do they look like?",
            itemAns:"The first stage is Research — it may take a couple of days, and after that, you will regularly receive updates every two days, and on every Friday, you will receive a timed report with the exact amount of time spent during the week on each of the tasks.",
            itemSelected:false
        }
    ])

    const handleclick = (id) =>{
        const newArr = faqItems.map(item => item.id === id ? {...item, itemSelected : !item.itemSelected} : item)
        setFaqItems(newArr)
    }
    const parentDivRef = useRef(null);

    useEffect(()=>{
        const childArray = Array.from(parentDivRef.current.children)
        const handleScroll = () =>{
            childArray.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                if(itemTop < 500){
                    setTimeout(() => {
                        item.classList.add("revealFaq")
                    }, 200);
                }
                
          
            })

        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
  return (
    <>
     <div className="pageDesc">
        <span>FAQ</span>
        </div>
        <div className="faqDesc">
            <div className="faqDescInner"><span>We have answer</span></div>
            <div className="faqDescInner"><span>Do you have any questions? We have some of the most common answers for common questions. If you didn’t find them here — let’s have a call.</span></div>
        </div>

        <div className="faqDiv" ref={parentDivRef}>
            {faqItems.map(item => (
            <div className="faqInner" key={item.id}  onClick={() => handleclick(item.id)}>
                <div className="faqInnerTop">
                    <span>{item.itemQue}</span>
                    <span>
                    <span ><FaMinus /></span>
                    <span className={item.itemSelected ? "expanded" : null}><FaMinus /></span>
                    
                    </span>
                </div>
              <div className={item.itemSelected ? "faqInnerBottom expanded" : "faqInnerBottom"}>
                    <span>{item.itemAns}</span>
                </div>
                
            </div>
            ))}
        </div>
          <Animated navItems={navItems} setNavItems={setNavItems} NavbarRef={NavbarRef}/>
          <Footer />
    </>
  )
}

export default PageFaq
