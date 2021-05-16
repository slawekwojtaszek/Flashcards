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
      console.log(input);
   };

   const skipWord = () => {
      randomNumber();
      // generateNewWord();
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

   const addWord = () => {
      console.log("elo");
   };

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
      if (e.target.innetText === "English" || e.target.alt === "English") {
         changeToEng();
      } else if (
         e.target.alt === "Spanish" ||
         e.target.innetText === "Spanish"
      ) {
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
      console.log(isEnglish);
      console.log(isSpanish);

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
