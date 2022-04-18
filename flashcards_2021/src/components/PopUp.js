import React from "react";

function PopUp({ flag }) {
   return (
      <div className={flag ? "popup slide-out-bck-center" : "popup off "}>
         <h1>Please, write the translation</h1>
      </div>
   );
}

export default PopUp;
