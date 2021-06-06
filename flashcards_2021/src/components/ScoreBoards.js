import React from "react";
import { ScoreBoard } from "./ScoreBoard";

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
               <div className='png'>
                  {isStarted ? <img src={icon} alt='' /> : null}
               </div>
            </div>
         </section>
      </>
   );
};
