import React,{useState} from "react";
import './App.scss';
import Contact from "./components/contact/contact.jsx";
import Intro from "./components/intro/intro.jsx";
import Menu from "./components/menu/Menu.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import PorfolioList from "./components/portfoliolist/portfoliolist.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import Work from "./components/work/work.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";



export default function App(){
    const [menuOpen,setMenuOpen] = useState(false)
    
    return(
        <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Work/>
          <Testimonials/>
          <Contact/>
        </div>
       </div>
        
    )
}
