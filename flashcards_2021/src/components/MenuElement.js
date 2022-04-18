import React from "react";
import Spain from "../png/002-spain.png";

export const MenuElement = ({ blank, text, handleClick, icon }) => {
   return (
      <>
         <a className='menuelement' href={blank} onClick={handleClick}>
            {text}
            {/* <img src={icon} alt='' /> */}
         </a>
      </>
   );
};
