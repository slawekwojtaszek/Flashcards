import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorPopUp from "./components/ErrorPopUp";
import Generate from "./components/GenerateNumber";

import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Word } from "./components/Word";
import { Stats } from "./components/Stats";
import { Cards } from "./components/Cards";

function App() {
   const [words, setWords] = useState([
      {
         es: "casa",
         en: "house",
         id: 1,
      },
      {
         es: "manzana",
         en: "apple",
         id: 2,
      },
      {
         es: "sol",
         en: "sun",
         id: 3,
      },
      {
         es: "uno",
         en: "one",
         id: 4,
      },
   ]);

   const myNewArray = () => {
      words.map((item) => {
         console.log(item.id);
      });
   };

   const myVar = "TO DZIakdjkadjak  ALA";

   const [input, setInput] = useState("");

   const handleChange = (e) => {
      let myInput = e.target.value;
      // myInput = myInput.toLowerCase();
      setInput((input) => myInput);
   };

   const startApp = () => {
      myNewArray();
   };

   return (
      <div className='App'>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <Header />
         <Menu />
         <main>
            <Stats />
            {/* <Cards /> */}
            <section className='words glass'>
               <Cards data={myVar} />
               <div className='submit'>
                  <button onClick={startApp}>START</button>
               </div>
            </section>
         </main>
         <footer>
            <h1>Footer</h1>
         </footer>
      </div>
   );
}

export default App;
