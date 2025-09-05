import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import img1 from './media/rb_4225.png'
import img2 from './media/rb_8896.png'
import img3 from './media/rb_20165.png'
import img4 from './media/rb_2148753207.png'
import img5 from './media/rb_2150197101.png'
const Ourapproach = () => {
    const [approachItems, setApproachItems] = useState([
        {
            id : 1,
            itemName: "Discover",
            itemSelect: true
        },
        {
            id : 2,
            itemName: "Strategise",
            itemSelect: false
        },
        {
            id : 3,
            itemName: "Structure",
            itemSelect: false
        },
        {
            id : 4,
            itemName: "Create",
            itemSelect: false
        },
        {
            id : 5,
            itemName: "Emote",
            itemSelect: false
        }
    ])

    const [imgSrc, setImgSrc] = useState([
        {
            id : 1,
            itemName: img1,
            itemSelect: true
        },
        {
            id : 2,
            itemName: img2,
            itemSelect: false
        },
        {
            id : 3,
            itemName: img3,
            itemSelect: false
        },
        {
            id : 4,
            itemName: img4,
            itemSelect: false
        },
        {
            id : 5,
            itemName: img5,
            itemSelect: false
        }
    ])
    const [textPhrases, setTextPhrases] = useState([
        {
            id : 1,
            itemName: "We aimed to dive into the client’s project and its environment. A deep understanding of the target audience; its behaviors in the digital space; why and how this product will help is crucial before the launch.",
            itemSelect: true
        },
        {
            id : 2,
            itemName: "Facing the issues in understanding the market and audience could be solved within discover stage. But building the right strategy of the digital product it whole knowledge of predicting most scenarios and work on it.",
            itemSelect: false
        },
        {
            id : 3,
            itemName: "Building the user story helps to get the most common user scenarios. Based on it we prepare user flow. So you can feel and test the roadmap before the launch. Right structure forecast right users behaviors in each step.",
            itemSelect: false
        },
        {
            id : 4,
            itemName: "Now we all set. It’s time to create and deliver the whole digital product. Main key stages passed and now every single step would be confirmed with you. This is your project and we here just to help you with it.",
            itemSelect: false
        },
        {
            id : 5,
            itemName: "You want something different? Thinking out of box and fresh new vision? Maybe you are looking for Wow-effect? What’s more you need? Clients’ and User experience? You are in the right place to rock with us! We are Emote!",
            itemSelect: false
        }
    ])
    const illustrationRef = useRef(null)
    const handleSelection = (id) => {

        const newObj = approachItems.map(item => (item.id === id) ? { ...item, itemSelect: true } : { ...item, itemSelect: false })
        const newObjIllustration = imgSrc.map(item => item.id === id ? { ...item, itemSelect: true } : { ...item, itemSelect: false })
        const newTextPhrases = textPhrases.map(item => item.id === id ? { ...item, itemSelect: true } : { ...item, itemSelect: false })
        
        setApproachItems(newObj)
        setTextPhrases(newTextPhrases)
        if(!(approachItems[id - 1].itemSelect)){
            illustrationRef.current.classList.add("disappear");
        }
        setTimeout(() => {
            setImgSrc(newObjIllustration)
        }, 300);  
    }   
  return (
    <div className='ourapproach'>
      <div className="ourapproachTop"><span>Our approach</span></div>
      <div className="ourapproachBottom">
        <div className="ourapproachBottomLeft">
         {imgSrc.map(item => item.itemSelect ? (
            <img src={item.itemName} alt="" key={item.id} className='illustrationAnimate' ref={illustrationRef}/>
         ): null)}
        
        </div>
        <div className="ourapproachBottomRight">
            <div className="ourapproachBottomRightTop">
            {approachItems.map(item=>(
                <div className={item.itemSelect ? "approachItems selected" : "approachItems" } key={item.id} onClick={() => handleSelection(item.id)}>{item.itemName}</div>
            ))} 
            </div>
            
              {textPhrases.map(item => item.itemSelect ?  (
                <div className="ourapproachBottomRightBottom">
                <span key={item.id} >{item.itemName}</span>
                </div>
              ) : null )}
            
        </div>
      </div>
    </div>
  )
}

export default Ourapproach
