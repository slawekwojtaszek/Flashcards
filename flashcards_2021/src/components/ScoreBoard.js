import React from "react";

export const ScoreBoard = ({ number, title, color, list, myArray }) => {
   // const showWord (arr) => {
   //    return arr.map((item) => <p>{item}</p>)

   // }
   // showWord(myArray);
   return (
      <>
         <div className='singleboard'>
            <p>{title}</p>

            <div className={color}>
               <span>{number}</span>
            </div>
            <div>
               {myArray.map((item) => (
                  <li className='boardItem'>{item}</li>
               ))}
            </div>
         </div>

         {/* <div className='open'>
            <li>Word1</li>
         </div> */}
      </>
   );
};
