import React from "react";
import { Word } from "./Word";

export const Card = ({ language, word1 }) => {
   return (
      <>
         <div className='card1'>
            <div className='bar'>
               <div className='flag'>
                  <img src='' alt='' />
               </div>
               <div className='lang'>{language}</div>
            </div>
            <div className='word1'>
               <Word myWord={word1} />
            </div>
         </div>
      </>
   );
};
