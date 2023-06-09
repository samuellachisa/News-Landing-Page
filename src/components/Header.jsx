import React from 'react'
import Logo from '../assets/logo.svg'
import img1 from '../assets/image-web-3-desktop.jpg'
import img3 from '../assets/image-retro-pcs.jpg'
import img4 from '../assets/image-gaming-growth.jpg'
import img5 from '../assets/image-top-laptops.jpg'
import img6 from '../assets/icon-menu.svg'
import img7 from '../assets/icon-menu-close.svg'
import "../index.css"
function Header() {
  return (
    <div>
        <div className='header'>
           <img  className='logo' src={Logo} width="100px"/>
       
           <ul className='main-nav'> 
            <li>
               <a href='#'>Home </a> 
            </li>
            <li>
                <a  href='#'>New</a>
            </li>

            <li>
                <a  href='#'  >Popular</a>
            </li>
            <li>
               <a  href='#' >Trending</a>
            </li>
            <li>
                <a  href='#'>Categories</a>
            </li>
              </ul>
         <div className='drop-down'>
         <li>
               <a href='#'>Home </a> 
            </li>
            <li>
                <a  href='#'>New</a>
            </li>

            <li>
                <a  href='#'  >Popular</a>
            </li>
            <li>
               <a  href='#' >Trending</a>
            </li>
            <li>
                <a  href='#'>Categories</a>
            </li>
         </div>
      
         <span className='toggleBtn'>
        <img src={img6}/>
         </span>
       </div>
 
         
        <div className='container'>
            <span className='sub-container'><img src={img1} width="100%"/>
            <span className='container-two'>
            <h2>The Bright Future of Web 3.0?</h2>
            <span>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
               <button type="button"className='readBtn'>READ MORE</button>
            </span>
            </span>
           
            </span>

            <span className='side-bar'>
            <h1 className='Title'>New</h1>
            <span>
            <h3 className='sub-title'>Hydrogen Vs Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </span>
            <hr/>
            <span>
            <h3  className='sub-title'>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </span>
            <hr/>
            <span>
            <h3  className='sub-title'>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
            </span>
            
               
            </span>
        </div>
        <div>

            <div className='container-bottom'>
                <div className="Items">
                    <span>
                     <img src={img3} height="200px"/>
                    </span>
                    <span className='side-content'>
                        <h3>01</h3>
                        <h4>Reviving Retro PCs</h4>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </span>
                </div>
                <div className="Items">
                   <span>
                   <img src={img5} height="200px"/>
                   </span>
                    <span className='side-content'>
                    <h3>02</h3>
                    <h4>Top 10 Laptops of 2022</h4>
                    <p>Our best picks for various needs and budgets.</p>
                    </span>
                </div>
                <div className="Items">
                    <span>
                    <img src={img4} height="200px"/>
                    </span>
                    <span className='side-content'>   <h3>03</h3>
                    <h4>The Growth of Gaming </h4>
                    <p>How the pandemic has sparked fresh opportunies.</p>
                    </span>
                </div>
            </div>
        </div>

    
     </div>
    
  )
}

export default Header