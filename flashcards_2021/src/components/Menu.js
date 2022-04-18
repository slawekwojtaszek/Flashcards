import React from "react";
import MenuMobile from "../components/MenuMobile";
import { MenuElement } from "./MenuElement";
import logo from "../png/001-cards.png";
import Spain from "../png/002-spain.png";

function Menu({ handleClick, isOpen }) {
   return (
      <nav>
         <div className='logo glass2'>
            <div className='logo-container'>
               <a href='/'>
                  <h1>Flashcards</h1>
               </a>
               <img src={logo} alt='' />
            </div>
            <div className='open' onClick={handleClick}>
               <p className='open-inside'> {isOpen ? "-" : "+"}</p>
            </div>
         </div>
         <MenuMobile isOpen={isOpen} handleClick={handleClick} />
         <ul className='glass2'>
            <MenuElement handleClick={handleClick} text='English' />
            <MenuElement handleClick={handleClick} text='Spanish' />
            <MenuElement
               icon={Spain}
               handleClick={handleClick}
               text='Skip Word'
            />
            <MenuElement handleClick={handleClick} text='Add Word' />
            <MenuElement handleClick={handleClick} text='Help' />
         </ul>
      </nav>
   );
}

export default Menu;
