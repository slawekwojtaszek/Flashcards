import React, { useState, useEffect } from "react";
import "./App.css";

import ErrorPopUp from "./components/ErrorPopUp";
import Menu from "./components/Menu";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Word } from "./components/Word";
import { ScoreBoards } from "./components/ScoreBoards";
import { Cards } from "./components/Cards";
import testIcon from "./png/001-help.png";
import AddNewWord from "./components/AddNewWord";
import { findAllByTestId } from "@testing-library/dom";
import PopUp from "./components/PopUp";

function App() {
   const quotes = [
      "The limits of my language mean the limits of my world.",
      "He who knows no foreign languages knows nothing of his own.",
      "Do you know what a foreign accent is? It’s a sign of bravery. ",
      "Learn a language, and you’ll avoid a war.",
      "Language shapes the way we think, and determines what we can think about.",
      "To have another language is to possess a second soul.",
      "Learning is a treasure that will follow its owner everywhere.",
      "To learn a language is to have one more window from which to look at the world.",
      "You live a new life for every new language you speak. If you know only one language, you live only once.",
      "Learn a new language and get a new soul. ",
      "With languages, you are at home anywhere.",
      "A different language is a different vision of life. ",
      "One language sets you in a corridor for life. Two languages open every door along the way.",
      "A man who knows two languages is worth two men. ",
      "You can never understand one language until you understand at least two.",
      "He who knows no foreign languages know nothing of his own.",
      "Change your language and you change your thoughts.",
      " A new language is a new life.",
      "Knowledge of languages is the doorway to wisdom.",
      "The man who does not know other languages, unless he is a man of genius, necessarily has deficiencies in his ideas.",
      "Language is wine upon the lips.",
      "Language is to the mind more than light is to the eye.",
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
      // {
      //    es: "arbol",
      //    en: "tree",
      //    id: 11,
      //    icon: "./png/003-tree.png",
      // },
      // {
      //    es: "agua",
      //    en: "water",
      //    id: 12,
      //    icon: "./png/007-drop.png",
      // },
      // {
      //    es: "bicicleta",
      //    en: "bike",
      //    id: 13,
      //    icon: "./png/002-bicycle.png",
      // },
      // {
      //    es: "cohete",
      //    en: "rocket",
      //    id: 14,
      //    icon: "./png/001-rocket.png",
      // },
      // {
      //    es: "nevera",
      //    en: "fridge",
      //    id: 15,
      //    icon: "./png/004-fridge.png",
      // },
      // {
      //    es: "madera",
      //    en: "wood",
      //    id: 16,
      //    icon: "./png/002-wood.png",
      // },
      // {
      //    es: "amor",
      //    en: "love",
      //    id: 17,
      //    icon: "./png/006-love.png",
      // },
      // {
      //    es: "telefono",
      //    en: "phone",
      //    id: 18,
      //    icon: "./png/005-smartphone.png",
      // },
      // {
      //    es: "avion",
      //    en: "plane",
      //    id: 19,
      //    icon: "./png/007-travelling.png",
      // },
      // {
      //    es: "dinero",
      //    en: "money",
      //    id: 20,
      //    icon: "./png/003-money.png",
      // },
   ]);

   //Generate random word number

   useEffect(() => {
      randomNumber();
   }, []);

   const randomNumber = () => {
      setNumber((number) => Math.floor(Math.random() * words.length));
   };

   const quoteNumber = () => {
      setQuote((quote) => Math.floor(Math.random() * quotes.length));
   };

   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };

   //Word States
   const [isOpen, setisOpen] = useState(false);
   const [isStarted, setIsStarted] = useState(false);
   const [isEnglish, setIsEnglish] = useState(true);
   const [isSpanish, setIsSpanish] = useState(false);

   const [input, setInput] = useState("");
   const [number, setNumber] = useState(0);
   //Single Word State
   const [word, setWord] = useState();
   const [word2, setWord2] = useState("");
   const [icon, setIcon] = useState();
   const [quote, setQuote] = useState(0);
   //Add New Word States
   const [newEnglish, setNewEnglish] = useState("");
   const [newSpanish, setNewSpanish] = useState("");
   const [add, setAdd] = useState(false);

   const [isHelpOpen, setIsHelpOpen] = useState(false);
   //Boards Array States
   const [good, setGood] = useState([]);
   const [bad, setBad] = useState([]);
   const [skip, setSkip] = useState([]);
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

   const addWord = (en, es) => {
      if (en !== "" && es !== "") {
         const nmb = Math.floor(Math.random() * 10000);
         const obj = {
            en: en,
            es: es,
            icon: testIcon,
            id: nmb,
         };
         // setInterval(() => {
         //    alert("word added");
         // }, 2000);
         document.querySelector(".alert").classList.add("show");
         setInterval(() => {
            document.querySelector(".alert").classList.remove("show");
         }, 1500);
         return words.push(obj);
      }
   };

   const handleInput = (e) => {
      let myInput = e.target.value;
      myInput = myInput.toLowerCase();
      setInput((input) => myInput);
   };

   const handleNewWordEnglish = (e) => {
      let myInput = e.target.value;
      myInput = myInput.toLowerCase();
      setNewEnglish((input) => myInput);
      console.log(myInput + "to jest ang");
   };

   const handleNewWordSpanish = (e) => {
      let myInput = e.target.value;
      myInput = myInput.toLowerCase();
      setNewSpanish((input) => myInput);
      console.log(myInput + "to jest span");
   };

   const handleAddNewWord = (en, es) => {
      addWord(newEnglish, newSpanish);
      setNewEnglish((newEnglish) => "");
      setNewSpanish((newSpanish) => "");
      setAdd((add) => !add);
      console.log((newEnglish, newSpanish));
   };

   const setAddFunction = () => {
      setAdd((add) => !add);
   };

   const changeFlag = () => {
      if (isStarted) {
         setFlag((flag) => !flag);
      }
   };

   const addWordToArray = (input, word) => {
      if (input === word || input === word2) {
         let copyArray = good;
         copyArray.push(input);
         setGood((good) => copyArray);
      } else if (
         (input !== word && input !== "") ||
         (input === word2 && input !== "")
      ) {
         let copyArray = bad;
         copyArray.push(word);
         setBad((bad) => copyArray);
      } else if (input === "") {
         let copyArray = skip;
         copyArray.push(word);
         setSkip((skip) => skip);
      }
   };

   const changeToSpanish = () => {
      setWord((word) => words[number].en);
      setWord2((word2) => words[number].es);
      setIcon((icon) => words[number].icon);
      setIsSpanish((isSpanish) => true);
      setIsEnglish((isEnglish) => false);
      setInput((imput) => "");
   };

   const changeToEnglish = () => {
      setWord((word) => words[number].es);
      setWord2((word2) => words[number].en);
      setIcon((icon) => words[number].icon);
      setIsEnglish((isEnglish) => true);
      setIsSpanish((isSpanish) => false);
      setInput((imput) => "");
   };

   const handleMenuClick = (e) => {
      setisOpen((isOpen) => !isOpen);
      if (
         (e.target.alt === "English" && isStarted === true) ||
         (e.target.text === "English" && isStarted === true)
      ) {
         changeToEnglish();
      } else if (
         (e.target.alt === "Spanish" && isStarted === true) ||
         (e.target.text === "Spanish" && isStarted === true)
      ) {
         changeToSpanish();
      } else if (
         (e.target.alt === "Skip Word" && isStarted === true) ||
         (e.target.innerHTML === "Skip Word" && isStarted === true)
      ) {
         skipWord();
         addWordToArray(input, word2);
         setInput((input) => "");
      } else if (
         e.target.alt === "Add Word" ||
         e.target.innerHTML === "Add Word"
      ) {
         setAdd((add) => !add);
      } else if (e.target.alt === "Help" || e.target.innerHTML === "Help") {
         setIsHelpOpen(true);
      }
   };

   const skipWord = () => {
      randomNumber();
      generateNewWord();
      setSkipped((skipped) => skipped + 1);
   };

   const startApp = () => {
      setIsStarted((isStarted) => true);

      if (isEnglish) {
         if (input === "") {
            generateNewWord();
            changeFlag();
            randomNumber();
         } else if (input === word2) {
            addWordToArray(input, word2);
            generateNewWord();
            randomNumber();
            setCorrect((correct) => correct + 1);
         } else if (input !== word2) {
            addWordToArray(input, word2);
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
            randomNumber();
         } else if (input === word2) {
            addWordToArray(input, word2);
            generateNewWord();
            randomNumber();
            setCorrect((correct) => correct + 1);
         } else if (input !== word2) {
            addWordToArray(input, word2);
            generateNewWord();
            randomNumber();
            setWrong((wrong) => wrong + 1);
         }
      }
      setInput((input) => "");
      quoteNumber();
   };

   return (
      <div className='app'>
         {isHelpOpen ? (
            <div className='help'>
               <h1 onClick={() => setIsHelpOpen(false)}>X</h1>
               <h2>eloooo</h2>
            </div>
         ) : null}

         <div className='alert'>
            <p>The words have been successfully added</p>{" "}
         </div>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <PopUp flag={flag} />
         <Header quote={quotes[quote]} />
         <Header />
         <AddNewWord
            add={add}
            addFunction={setAddFunction}
            handleEnglish={handleNewWordEnglish}
            newEnglish={newEnglish}
            handleSpanish={handleNewWordSpanish}
            newSpanish={newSpanish}
            handleAddNewWord={handleAddNewWord}
         />
         <main>
            <div className='section1'>
               <Menu handleClick={handleMenuClick} isOpen={isOpen} />
            </div>
            <div className='section2'>
               <ScoreBoards
                  goodWords={good}
                  wrongWords={bad}
                  skip={skip}
                  correct={correct}
                  skipped={skipped}
                  wrong={wrong}
                  icon={icon}
                  isStarted={isStarted}
                  handleChange={handleInput}
               />
            </div>
            <div className='section3'>
               <section className='words'>
                  <Cards
                     icon={icon}
                     data={word}
                     lan={isEnglish}
                     onChange={handleInput}
                     value={input}
                     edit={capitalizeFirstLetter}
                     isStarted={isStarted}
                     isEnglish={isEnglish}
                     isSpanish={isSpanish}
                  />
                  <div className='submit'>
                     <button className='button' onClick={startApp}>
                        {isStarted ? "Check" : "Start"}
                     </button>
                  </div>
               </section>
            </div>
         </main>
         {/* <Footer /> */}
      </div>
   );
}

export default App;
