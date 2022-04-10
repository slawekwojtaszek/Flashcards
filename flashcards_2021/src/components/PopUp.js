import React from "react";

function PopUp({ flag }) {
   return (
      <div className={flag ? "popup slide-out-top" : "popup off "}>
         <h1>Please, write the translation</h1>
      </div>
   );
}

export default PopUp;
