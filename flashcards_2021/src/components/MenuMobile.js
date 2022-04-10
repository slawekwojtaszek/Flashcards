import React from "react";
import { MenuElement } from "./MenuElement";

function MenuMobile({ isOpen, handleClick }) {
   return (
      <>
         <div className={isOpen ? "mobile show" : "mobile"}>
            <MenuElement handleClick={handleClick} text='English' />
            <MenuElement handleClick={handleClick} text='Spanish' />
            <MenuElement handleClick={handleClick} text='Skip Word' />
            <MenuElement handleClick={handleClick} text='Add Word' />
            <MenuElement handleClick={handleClick} text='Help' />
         </div>
      </>
   );
}

export default MenuMobile;
