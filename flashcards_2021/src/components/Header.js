import React from "react";
import "../css/Header.css";

export const Header = ({ quote }) => {
   return (
      <header className='quote'>
         <h1>{quote}</h1>
      </header>
   );
};
