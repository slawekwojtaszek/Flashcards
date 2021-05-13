import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorPopUp from "./components/ErrorPopUp";
import Generate from "./components/GenerateNumber";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Word } from "./components/Word";
import { ScoreBoards } from "./components/ScoreBoards";
import { Cards } from "./components/Cards";

function App() {
   const [words, setWords] = useState([
      {
         es: "casa",
         en: "house",
         id: 1,
         icon: "./png/001-house.png",
      },
      {
         es: "manzana",
         en: "apple",
         id: 2,
         icon: "./png/001-apple.png",
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
      {
         es: "dos",
         en: "two",
         id: 5,
      },
   ]);

   //Generate random number

   const randomNumber = () => {
      setNumber((number) => Math.floor(Math.random() * words.length));
   };

   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };

   const [isEnglish, setIsEnglish] = useState(true);

   //Word States
   const [input, setInput] = useState("");
   const [number, setNumber] = useState(0);
   const [word, setWord] = useState();
   const [word2, setWord2] = useState("");
   const [icon, setIcon] = useState();
   //Points States
   const [correct, setCorrect] = useState(0);
   const [skipped, setSkipped] = useState(0);
   const [wrong, setWrong] = useState(0);

   //Functions
   const generateNewWord = () => {
      setWord((word) => words[number].es);
      setWord2((word2) => words[number].en);
      setIcon((icon) => words[number].icon);
   };

   const handleChange = (e) => {
      let myInput = e.target.value;
      myInput = myInput.toLowerCase();
      setInput((input) => myInput);
      console.log(input);
   };

   const startApp = () => {
      generateNewWord();
      if (input === "") {
         console.log("pusty input");
         randomNumber();
      } else if (input === word2) {
         console.log("dobe tlumaczenie");
         randomNumber();
         // setCorrect((correct) => correct + 1);
         // setInput((input) => "");
      } else if (input !== word2) {
         console.log("zle tlumaczenie");
         randomNumber();
      }
      setInput((input) => "");
      // console.log(word + " " + word2);
   };

   return (
      <div className='App'>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <Header />
         <Menu />

         <main>
            <ScoreBoards correct={correct} skipped={skipped} wrong={wrong} />
            {/* <Cards /> */}
            <section className='words glass'>
               <Cards
                  icon={icon}
                  data={word}
                  lan={isEnglish}
                  onChange={handleChange}
                  value={input}
               />
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
