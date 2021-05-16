import React from "react";

export const MenuElement = ({
   url,
   src,
   text,
   ero,
   onClick,
   handleClick,
   icon,
}) => {
   return (
      <li>
         <a href={url} onClick={handleClick}>
            {" "}
            <img className='imge' src={src} alt={icon} />{" "}
         </a>
         <a className='menuelement' href={url} onClick={handleClick}>
            {text}
         </a>
      </li>
   );
};
