import React from "react";

export const MenuElement = ({ url, text, handleClick }) => {
   return (
      <>
         <a className='menuelement' href={url} onClick={handleClick}>
            {text}
         </a>
      </>
   );
};
