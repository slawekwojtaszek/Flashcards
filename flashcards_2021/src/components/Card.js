import React from "react";

export const Card = ({
   language,
   word1,
   handleChange,
   is,
   change,
   value,
   icon,
}) => {
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
               <img src={process.env.PUBLIC_URL + icon} />
               {word1}
               <h2>
                  {is ? (
                     <input onChange={change} type='text' value={word1} />
                  ) : null}{" "}
               </h2>
            </div>
         </div>
      </>
   );
};
