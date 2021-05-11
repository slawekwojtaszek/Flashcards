import React from "react";

export const MenuElement = ({ url, src, text }) => {
   return (
      <li>
         <a href={url}>
            {" "}
            <img src={src} alt='' />{" "}
         </a>
         <a className='menuelement' href={url}>
            {text}
         </a>
      </li>
   );
};
