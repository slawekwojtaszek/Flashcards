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
let url = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";

export const Nav = () => {
   return (
      <nav>
         {/* <div className='btn' onClick={togglePop}></div>
            {seen ? <ErrorPopUp toggle={togglePop} /> : null} */}

         <div className='logo glass2'>Flashcards</div>
         <ul className='glass2'>
            <li>
               <a href={url}>
                  {" "}
                  <img src={england} alt='' />{" "}
               </a>
               <a className='menuelement' href={url}>
                  English
               </a>
            </li>
            <li>
               <a href={url}>
                  {" "}
                  <img src={spain} alt='' />{" "}
               </a>
               <a className='menuelement' href={url}>
                  Spanish
               </a>
            </li>
            <li>
               <a>
                  {" "}
                  <img src={skip} alt='' />{" "}
               </a>
               <a className='menuelement' href={url}>
                  Next Word
               </a>
            </li>
            <li>
               <a href={url}>
                  {" "}
                  <img src={reset} alt='' />{" "}
               </a>
               <a className='menuelement' href={url}>
                  Reset
               </a>
            </li>
            <li>
               <a href={url}>
                  {" "}
                  <img src={add} alt='' />{" "}
               </a>
               <a className='menuelement' href={url}>
                  Add Word
               </a>
            </li>
            <li>
               <a href={url}>
                  {" "}
                  <img src={help} alt='' />{" "}
               </a>
               <a className='menuelement' href={url}>
                  Help
               </a>
            </li>
            <li>
               <a href='#'>
                  {" "}
                  <img src={night} alt='' />{" "}
               </a>
               <a className='menuelement' href='#'>
                  Night Mode
               </a>
            </li>
         </ul>
      </nav>
   );
};
