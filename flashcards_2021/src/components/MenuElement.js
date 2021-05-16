import React from "react";

export const MenuElement = ({
   url,
   src,
   text,
   ero,
   onClick,
   changeLan,
   icon,
}) => {
   return (
      <li>
         <a href={url} onClick={changeLan}>
            {" "}
            <img className='imge' src={src} alt={icon} />{" "}
         </a>
         <a className='menuelement' href={url} onClick={changeLan}>
            {text}
         </a>
      </li>
   );
};
