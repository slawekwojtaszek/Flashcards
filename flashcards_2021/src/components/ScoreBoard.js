import React from "react";

export const ScoreBoard = ({ number, title, color }) => {
   return (
      <>
         <div className='singleboard'>
            <p>{title}</p>

            <div className={color}>
               <span>{number}</span>
            </div>
         </div>
      </>
   );
};
