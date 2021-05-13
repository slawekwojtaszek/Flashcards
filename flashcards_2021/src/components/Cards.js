import React from "react";
import { Card } from "./Card";

export const Cards = ({ data, lan, onChange, value, icon }) => {
   return (
      <>
         <Card language='Spanish' icon={icon} word1={data} />
         <Card language='English' is={lan} change={onChange} value={value} />
      </>
   );
};
