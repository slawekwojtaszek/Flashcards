import React from "react";
import { Card } from "./Card";

export const Cards = ({ data }) => {
   return (
      <>
         <Card language='Spanish' word1={data} />
         <Card language='English' />
      </>
   );
};
