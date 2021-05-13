import React from "react";

export const MenuElement = ({ url, src, text, onClick }) => {
   return (
      <li>
         <a href={url} onClick={onClick}>
            {" "}
            <img src={src} alt='' />{" "}
         </a>
         <a className='menuelement' href={url} onClick={onClick}>
            {text}
         </a>
      </li>
   );
};
