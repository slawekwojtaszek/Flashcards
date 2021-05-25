import React from "react";
const englishFlag = "../png/002-united-kingdom.png";
const spanishFlag = "../png/001-spain.png";
const spanish = "Spanish";
const english = "English";
export const Cards = ({
   data,
   onChange,
   value,
   icon,
   isStarted,
   isSpanish,
   isEnglish,
}) => {
   return (
      <>
         <div className='card1'>
            <div className='bar'>
               <div className='flag'>
                  {isEnglish ? (
                     <img src={process.env.PUBLIC_URL + spanishFlag} />
                  ) : (
                     <img src={process.env.PUBLIC_URL + englishFlag} />
                  )}
               </div>
               <div className='lang'>{isEnglish ? spanish : english}</div>
            </div>
            <div className='word1'>
               <p>{data}</p>
            </div>
         </div>
         <div className='card1'>
            <div className='bar'>
               <div className='flag'>
                  {isEnglish ? (
                     <img src={process.env.PUBLIC_URL + englishFlag} />
                  ) : (
                     <img src={process.env.PUBLIC_URL + spanishFlag} />
                  )}
               </div>
               <div className='lang'>{isEnglish ? english : spanish}</div>
            </div>
            <div className='word1'>
               <textarea
                  name='ere'
                  onChange={onChange}
                  value={value}
                  id=''
                  cols='60'
                  placeholder={
                     isStarted
                        ? `How to say it in ${isEnglish ? english : spanish}?`
                        : "Press Start to begin"
                  }
                  rows='3'></textarea>
            </div>
         </div>

         {/* <Card
            isSpanish={isSpanish}
            isEnglish={isEnglish}
            language={isSpanish ? spanish : english}
            isMain={true}
            flag={isSpanish ? spanishFlag : englishFlag}
            word1={data}
         />
         <Card
            isSpanish={isSpanish}
            isEnglish={isEnglish}
            isMain={undefined}
            language={isEnglish ? english : spanish}
            flag={isSpanish ? spanishFlag : englishFlag}
            change={onChange}
            value={value}
            isStarted={isStarted} */}
      </>
   );
};
