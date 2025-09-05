import Navbar from "./Navbar";
import Home from "./Home";
import PageWork from "./PageWork";
import PageServices from "./PageServices";
import PageFaq from "./PageFaq";
import PageAbout from "./PageAbout";
import PageForm from "./PageForm";
import SideNav from "./SideNav";
import UserData from "./UserData";
import { HashRouter, Route, Routes} from "react-router-dom";
import { useEffect, useRef, useState } from "react";


function App() {
   const [navItems, setNavItems] = useState([
      {
          id : 1,
          itemName: "Our work",
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
    const NavbarRef = useRef(null)
    const MywrokRef = useRef(null)
    const sidenavRef = useRef(null)

    
 return(
    <>
  <Navbar NavbarRef={NavbarRef} sidenavRef={sidenavRef} navItems={navItems} setNavItems={setNavItems} />
  <SideNav sidenavRef={sidenavRef} NavbarRef={NavbarRef} />
  <Routes>
  <Route path='/' element={<Home NavbarRef={NavbarRef} MywrokRef={MywrokRef} navItems={navItems} setNavItems={setNavItems}  />}/>
  <Route path="/mywork" element={<PageWork  NavbarRef={NavbarRef} MywrokRef={MywrokRef}  navItems={navItems} setNavItems={setNavItems} />}/> 
  <Route path="/services" element={<PageServices NavbarRef={NavbarRef} navItems={navItems} setNavItems={setNavItems}/>}/> 
  <Route path="/faq" element={<PageFaq NavbarRef={NavbarRef} navItems={navItems} setNavItems={setNavItems}/>}/> 
  <Route path="/aboutus" element={<PageAbout NavbarRef={NavbarRef} navItems={navItems} setNavItems={setNavItems}  BackBlack={true}/>}/> 
  <Route path="/fillform"  element={<PageForm />}/>
  <Route path="/userdata"  element={<UserData />} />
  </Routes>


  </>
 );
}

export default App;
