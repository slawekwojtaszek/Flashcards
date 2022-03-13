import React, { useState } from "react";
import add from "../png/005-add.png";
import skip from "../png/001-next-page.png";
import help from "../png/003-info.png";
import esFlag from "../png/001-spain.png";
import enFlag from "../png/002-united-kingdom.png";
import night from "../png/001-night-mode.png";
import spain from "../png/002-spain.png";
import house from "../png/001-house.png";
import apple from "../png/001-apple.png";
import sun from "../png/002-sun.png";
import england from "../png/007-england.png";
import reset from "../png/006-circular-refreshment-arrow.png";
import { MenuElement } from "./MenuElement";
import logo from "../png/001-cards.png";
let url = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";

let es = "Spanish";
let en = "English";
let sw = "Skip Word";
let ad = "Add Word";
let hp = "Help";
let nm = "Night Mode";

function Menu({ handleClick, isOpen }) {
   return (
      <nav>
         <div className='logo glass2'>
            <h1>Flashcards</h1>
            <img src={logo} alt='' />
            <div className='open' onClick={handleClick}>
               +
            </div>
         </div>

         <ul className={isOpen ? "show glass2" : `glass2`}>
            <MenuElement
               src={england}
               icon={en}
               handleClick={handleClick}
               text='English'
            />

            <MenuElement
               src={spain}
               text={es}
               icon={es}
               handleClick={handleClick}
            />
            <MenuElement
               src={skip}
               icon={sw}
               handleClick={handleClick}
               text='Skip Word'
            />

            <MenuElement
               src={add}
               icon={ad}
               handleClick={handleClick}
               text='Add Word'
            />

            <MenuElement
               src={help}
               icon={hp}
               handleClick={handleClick}
               text='Help'
            />
            <MenuElement
               src={night}
               icon={nm}
               handleClick={handleClick}
               text='Night Mode'
            />
         </ul>
      </nav>
   );
}

export default Menu;
