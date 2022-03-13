import React from "react";

export const ScoreBoard = ({ number, title, color, myArray }) => {
   return (
      <>
         <div className='singleboard'>
            <p>{title}</p>

            <div className={color}>
               <span>{number}</span>
            </div>
            <div>
               {myArray.map((item, id) => (
                  <li className='boardItem' key={id}>
                     {item}
                  </li>
               ))}
            </div>
         </div>
      </>
   );
};
