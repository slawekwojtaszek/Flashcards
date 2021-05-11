import React from "react";
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
let url = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";

export const Menu = () => {
   return (
      <nav>
         <div className='logo glass2'>Flashcards</div>
         <ul className='glass2'>
            <MenuElement url={url} src={england} text='England' />
            <MenuElement url={url} src={spain} text='Spain' />
            <MenuElement url={url} src={skip} text='Skip Word' />
            <MenuElement url={url} src={add} text='Add Word' />
            <MenuElement url={url} src={help} text='Help' />
            <MenuElement url={url} src={night} text='Night Mode' />
         </ul>
      </nav>
   );
};
