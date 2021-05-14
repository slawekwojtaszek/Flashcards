import React from "react";
let newWord;
export const Card = ({
   language,
   word1,
   handleChange,
   is,
   change,
   value,
   flag,
   isMain,
}) => {
   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };
   const checkIt = () => {
      newWord = capitalizeFirstLetter(word1);
      return newWord;
      console.log(newWord);
   };

   return (
      <>
         <div className='card1'>
            <div className='bar'>
               <div className='flag'>
                  <h1>{isMain}</h1>
                  <img src={process.env.PUBLIC_URL + flag} />
               </div>
               <div className='lang'>{language}</div>
            </div>
            <div className='word1'>
               {isMain ? (
                  <p>{word1}</p>
               ) : (
                  <textarea
                     name='ere'
                     onChange={change}
                     value={value}
                     id=''
                     cols='60'
                     rows='3'></textarea>
               )}
            </div>
         </div>
      </>
   );
};
