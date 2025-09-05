import React from 'react'
import Mywork from './Mywork'
import Animated from "./Animated";
import Footer from "./Footer";
const PageWork = ({MywrokRef, NavbarRef, navItems, setNavItems}) => {
  return (
    <>
    <div className="pageDesc">
        <span>Some of our finest <br /> work</span>
    </div>
     <Mywork MywrokRef={MywrokRef} NavbarRef={NavbarRef} BackBlack={false} />
     <Animated navItems={navItems} setNavItems={setNavItems} NavbarRef={NavbarRef}/>
     <Footer />
    </>
  )
}

export default PageWork
