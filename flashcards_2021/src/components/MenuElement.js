import React from "react";

export const MenuElement = ({ url, src, text, onClick, change }) => {
   return (
      <li>
         <a href={url} onClick={change}>
            {" "}
            <img src={src} alt='' />{" "}
         </a>
         <a className='menuelement' href={url} onClick={change}>
            {text}
         </a>
      </li>
   );
};
