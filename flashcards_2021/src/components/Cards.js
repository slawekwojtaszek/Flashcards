import React from "react";
import { Card } from "./Card";
const englishFlag = "../png/002-united-kingdom.png";
const spanishFlag = "../png/001-spain.png";

export const Cards = ({
   data,
   lan,
   onChange,
   value,
   icon,
   flag,
   edit,
   isStarted,
}) => {
   return (
      <>
         <Card
            isMain={true}
            language='Spanish'
            flag={spanishFlag}
            word1={data}
         />
         <Card
            isMain={undefined}
            language='English'
            flag={englishFlag}
            is={lan}
            change={onChange}
            value={value}
            isStarted={isStarted}
         />
      </>
   );
};
