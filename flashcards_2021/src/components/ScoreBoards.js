import React from "react";
import { ScoreBoard } from "./ScoreBoard";

export const ScoreBoards = ({ icon, correct, skipped, wrong, isStarted }) => {
   return (
      <>
         <section className='panel glass2'>
            <div className='results'>
               <div className='boards'>
                  <ScoreBoard title='Correct' color='good' number={correct} />
                  <ScoreBoard
                     title='Skipped'
                     color='skipped'
                     number={skipped}
                  />
                  <ScoreBoard title='Wrong' color='bad' number={wrong} />
               </div>
            </div>
            <div className='icon'>
               <div className='png'>
                  {isStarted ? <img src={icon} alt='' /> : null}
               </div>
            </div>
         </section>
      </>
   );
};
