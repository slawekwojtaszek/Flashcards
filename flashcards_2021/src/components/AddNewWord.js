import React, { useState } from "react";

function AddNewWord({
   add,
   addFunction,
   handleEnglish,
   newEnglish,
   handleSpanish,
   newSpanish,
   handleAddNewWord,
}) {
   return (
      <div className={add ? "add " : "popdown"}>
         <div className='top'>
            <div className='x'>
               <span
                  onClick={() => {
                     addFunction((add) => !add);
                  }}>
                  X
               </span>
            </div>
         </div>
         <div className='title'>
            <h1>Add Word</h1>
            <p>Add your word to expand the vocabulary</p>
         </div>
         <div className='header'>
            <div className='form'>
               <div className='inp1'>
                  <p>English</p>
                  <input
                     onChange={handleEnglish}
                     type='text'
                     value={newEnglish}
                  />
               </div>
               <div className='inp2'>
                  <p>Spanish</p>
                  <input
                     type='text'
                     onChange={handleSpanish}
                     value={newSpanish}
                  />
               </div>
               <button
                  onClick={() => {
                     console.log("elo");
                     handleAddNewWord();
                  }}>
                  Add Word
               </button>
            </div>
         </div>

         <div className='footer'>
            <p>
               Unfortunately, adding your icon is not supported at the moment
            </p>
         </div>
      </div>
   );
}

export default AddNewWord;
