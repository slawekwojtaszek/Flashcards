import React from "react";
import "../css/AddWord.css";

function AddNewWord({
   isAddWordOpen,
   addFunction,
   handleEnglish,
   newEnglish,
   handleSpanish,
   newSpanish,
   handleAddNewWord,
}) {
   return (
      <div className={isAddWordOpen ? "add glass3 " : "add off"}>
         <div className='top'>
            <div className='x'>
               <span
                  onClick={() => {
                     addFunction((isAddWordOpen) => !isAddWordOpen);
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
