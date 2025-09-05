import React from 'react'
import MainFront from "./MainFront";
import Ourapproach from "./Ourapproach";
import Mywork from "./Mywork";
import Passionate from "./Passionate";
import Animated from "./Animated";
import Footer from "./Footer";
const Home = ({MywrokRef, NavbarRef, navItems, setNavItems}) => {
  return (
    <>
  <MainFront  NavbarRef={NavbarRef}/>
  <Ourapproach />
  <Mywork MywrokRef={MywrokRef} NavbarRef={NavbarRef} BackBlack={true} navItems={navItems} setNavItems={setNavItems} />
  <Passionate />
  <Animated navItems={navItems} setNavItems={setNavItems} NavbarRef={NavbarRef}/>
  <Footer />
    </>
  )
}

export default Home
