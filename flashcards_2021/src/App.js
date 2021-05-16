import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorPopUp from "./components/ErrorPopUp";
import Generate from "./components/GenerateNumber";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Word } from "./components/Word";
import { ScoreBoards } from "./components/ScoreBoards";
import { Cards } from "./components/Cards";
import { findAllByTestId } from "@testing-library/dom";

function App() {
   const quotes = [
      "The limits of my language mean the limits of my world.",
      "He who knows no foreign languages knows nothing of his own.",
   ];

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
         icon: "./png/002-sun.png",
      },
      {
         es: "carro",
         en: "car",
         id: 4,
         icon: "./png/010-car.png",
      },
      {
         es: "zanahoria",
         en: "carrot",
         id: 5,
         icon: "./png/001-carrot.png",
      },
      {
         es: "gato",
         en: "cat",
         id: 6,
         icon: "./png/004-cat.png",
      },
      {
         es: "perro",
         en: "dog",
         id: 7,
         icon: "./png/005-dog.png",
      },
      {
         es: "dulce",
         en: "candy",
         id: 8,
         icon: "./png/006-candy.png",
      },
      {
         es: "nube",
         en: "cloud",
         id: 9,
         icon: "./png/009-cloud.png",
      },
      {
         es: "fuego",
         en: "fire",
         id: 10,
         icon: "./png/008-fire.png",
      },
      {
         es: "arbol",
         en: "tree",
         id: 11,
         icon: "./png/003-tree.png",
      },
      {
         es: "agua",
         en: "water",
         id: 12,
         icon: "./png/007-drop.png",
      },
      {
         es: "bicicleta",
         en: "bike",
         id: 13,
         icon: "./png/002-bicycle.png",
      },
      {
         es: "cohete",
         en: "rocket",
         id: 14,
         icon: "./png/001-rocket.png",
      },
      {
         es: "nevera",
         en: "fridge",
         id: 15,
         icon: "./png/004-fridge.png",
      },
      {
         es: "madera",
         en: "wood",
         id: 16,
         icon: "./png/002-wood.png",
      },
      {
         es: "amor",
         en: "love",
         id: 17,
         icon: "./png/006-love.png",
      },
      {
         es: "telefono",
         en: "phone",
         id: 18,
         icon: "./png/005-smartphone.png",
      },
      {
         es: "avion",
         en: "plane",
         id: 19,
         icon: "./png/007-travelling.png",
      },
      {
         es: "dinero",
         en: "money",
         id: 20,
         icon: "./png/003-money.png",
      },
   ]);

   //Generate random number

   const randomNumber = () => {
      setNumber((number) => Math.floor(Math.random() * words.length));
   };

   //Remove last word

   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };

   //Word States
   const [isStarted, setIsStarted] = useState(false);
   const [isEnglish, setIsEnglish] = useState(true);
   const [isSpanish, setIsSpanish] = useState(false);
   const [nightMode, setNightMode] = useState(false);
   const [input, setInput] = useState("");
   const [number, setNumber] = useState(0);
   const [word, setWord] = useState();
   const [word2, setWord2] = useState("");
   const [icon, setIcon] = useState();

   //Points States
   const [correct, setCorrect] = useState(0);
   const [skipped, setSkipped] = useState(0);
   const [wrong, setWrong] = useState(0);
   const [flag, setFlag] = useState(false);

   //Functions
   const generateNewWord = () => {
      if (isEnglish) {
         setWord((word) => words[number].es);
         setWord2((word2) => words[number].en);
         setIcon((icon) => words[number].icon);
      } else if (isSpanish) {
         setWord((word) => words[number].en);
         setWord2((word2) => words[number].es);
         setIcon((icon) => words[number].icon);
      }
   };

   const handleChange = (e) => {
      let myInput = e.target.value;
      myInput = myInput.toLowerCase();
      setInput((input) => myInput);
   };

   const skipWord = () => {
      randomNumber();
      generateNewWord();
      setSkipped((skipped) => skipped + 1);
   };

   const changeFlag = () => {
      if (isStarted) {
         setFlag((flag) => !flag);
      }
   };

   const nightModeSwitch = () => {
      setNightMode((nightMode) => !nightMode);
      if (nightMode === true) {
      }
   };

   // const addWord = () => {
   //    console.log("elo");
   // };

   const changeToSpan = () => {
      setWord((word) => words[number].en);
      setWord2((word2) => words[number].es);
      setIcon((icon) => words[number].icon);
      setIsSpanish((isSpanish) => true);
      setIsEnglish((isEnglish) => false);

      // generateNewWord();
   };
   const changeToEng = () => {
      setWord((word) => words[number].es);
      setWord2((word2) => words[number].en);
      setIcon((icon) => words[number].icon);
      setIsEnglish((isEnglish) => true);
      setIsSpanish((isSpanish) => false);
      // generateNewWord();
   };

   // const handleThat = () => {
   //    setFlag((flag) => !flag);
   // };

   const handleMenuClick = (e) => {
      if (e.target.alt === "English" || e.target.text === "English") {
         changeToEng();
      } else if (e.target.alt === "Spanish" || e.target.text === "Spanish") {
         changeToSpan();
      } else if (
         e.target.alt === "Skip Word" ||
         e.target.innerHTML === "Skip Word"
      ) {
         skipWord();
      } else if (
         e.target.alt === "Night Mode" ||
         e.target.innerHTML === "Night Mode"
      ) {
         nightModeSwitch();
         console.log(nightMode);
         console.log(e);
      } else if (
         e.target.alt === "Add Word" ||
         e.target.innerHTML === "Add Word"
      ) {
      }
   };

   const startApp = () => {
      setIsStarted((isStarted) => true);

      if (isEnglish) {
         if (input === "") {
            generateNewWord();
            changeFlag();
         } else if (input === word2) {
            generateNewWord();
            randomNumber();
            setCorrect((correct) => correct + 1);
         } else if (input !== word2) {
            generateNewWord();
            randomNumber();
            setWrong((wrong) => wrong + 1);
         }
      }
      if (isSpanish) {
         setIsStarted((isStarted) => true);
         if (input === "") {
            generateNewWord();
            changeFlag();
         } else if (input === word2) {
            generateNewWord();
            randomNumber();
            setCorrect((correct) => correct + 1);
         } else if (input !== word2) {
            generateNewWord();
            randomNumber();
            setWrong((wrong) => wrong + 1);
         }
      }
      // console.log(currentWord);
      // console.log(id);

      setInput((input) => "");
   };

   return (
      <div className={nightMode ? "App maincolor" : "App"}>
         <div className={nightMode ? "circle1 night" : "circle1"}></div>
         <div className={nightMode ? "circle2 night" : "circle2"}></div>
         <Header />
         <Menu handleClick={handleMenuClick} />
         <div className={flag ? "popup glass2" : "popdown "}>
            {" "}
            <span>X</span>
            <h1>PLEASE WRITE SOMETHING</h1>
         </div>
         <main>
            <ScoreBoards
               correct={correct}
               skipped={skipped}
               wrong={wrong}
               icon={icon}
               isStarted={isStarted}
               handleChange={handleChange}
            />
            {/* <Cards /> */}
            <section className='words glass'>
               <Cards
                  icon={icon}
                  data={word}
                  lan={isEnglish}
                  onChange={handleChange}
                  value={input}
                  edit={capitalizeFirstLetter}
                  isStarted={isStarted}
                  isEnglish={isEnglish}
                  isSpanish={isSpanish}
               />
               <div className='submit'>
                  <button onClick={startApp}>
                     {isStarted ? "Check" : "Start"}
                  </button>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}

export default App;
