import React from "react";

export const Stats = () => {
   return (
      <>
         <section className='panel glass2'>
            <div className='results'>
               <div className='boards'>
                  <div className='singleboard'>
                     <p>Correct</p>
                     <div className='good'>
                        <span></span>
                     </div>
                  </div>
                  <div className='singleboard'>
                     <p>Skipped</p>
                     <div className='skipped'>
                        <span></span>
                     </div>
                  </div>
                  <div className='singleboard'>
                     <p>Wrong</p>
                     <div className='bad'>
                        <span></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className='icon'>
               <div className='png'></div>
            </div>
         </section>
      </>
   );
};
