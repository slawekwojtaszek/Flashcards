import React, { useState, useEffect } from "react";

function Generate(props) {
   const generateNumber = (props) => {
      return Math.floor(Math.random() * props.words);
   };
   return (
      <div className='main'>
         <p>{props.number[1].en}</p>
      </div>
   );
}

export default Generate;
