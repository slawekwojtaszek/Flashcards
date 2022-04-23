import React, { useState } from "react";
import "../css/ScorePanel.css";
import { ScoreBoard } from "./ScoreBoard";
import Eye from "../png/eye.png";

export const ScoreBoards = ({
   icon,
   correct,
   skipped,
   wrong,
   isStarted,
   handleChange,
   goodWords,
   wrongWords,
   skip,
}) => {
   const [isIcon, setisIcon] = useState(false);

   const handleIcon = () => {
      console.log("elo");
      setisIcon((isIcon) => !isIcon);
   };
   return (
      <>
         <section className='panel glass'>
            <div className='results'>
               <div className='boards'>
                  <ScoreBoard
                     title='Correct'
                     myArray={goodWords}
                     color='good'
                     number={correct}
                  />
                  <ScoreBoard
                     title='Skipped'
                     myArray={skip}
                     color='skipped'
                     number={skipped}
                  />
                  <ScoreBoard
                     title='Wrong'
                     myArray={wrongWords}
                     color='bad'
                     number={wrong}
                  />
               </div>
            </div>
            <div className='icon'>
               {/* <div className='add'>
                  <h1>elo</h1>
                  <input onChange={handleChange} type='text' />
                  <input type='text' />
                  <button></button>
               </div> */}

               <div className='png' onClick={handleIcon}>
                  {isIcon ? (
                     <> {isStarted ? <img src={icon} alt='' /> : null} </>
                  ) : (
                     <>
                        <h1>click to see the hint</h1>
                        <img src={Eye} alt='' />
                     </>
                  )}
               </div>
            </div>
         </section>
      </>
   );
};
