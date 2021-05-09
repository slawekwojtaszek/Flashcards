import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorPopUp from "./components/ErrorPopUp";
import spain from "./png/002-spain.png";
import england from "./png/007-england.png";
import reset from "./png/006-circular-refreshment-arrow.png";
import add from "./png/005-add.png";
import skip from "./png/001-next-page.png";
import help from "./png/003-info.png";
import esFlag from "./png/001-spain.png";
import enFlag from "./png/002-united-kingdom.png";
import night from "./png/001-night-mode.png";
import house from "./png/001-house.png";
import apple from "./png/001-apple.png";
import sun from "./png/002-sun.png";

let url = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";
let flag = true;
let words = [
   {
      es: "casa",
      en: "house",
      id: 1,
      icon: house,
   },
   {
      es: "manzana",
      en: "apple",
      id: 2,
      icon: apple,
   },
   {
      es: "sol",
      en: "sun",
      id: 3,
      icon: sun,
   },
   {
      es: "uno",
      en: "one",
      id: 4,
      icon: sun,
   },
];

function App() {
   const arrEs = [];
   const arrEn = [];
   const arrIcon = [];
   const [input, setInput] = useState("");
   const [number, setNumber] = useState(0);
   const [wordEs, setWordEs] = useState(null);
   const [wordEn, setWordEn] = useState(null);
   const [seen, setSeen] = useState(false);

   const [icon, setIcon] = useState(undefined);
   const [correct, setCorret] = useState(0);
   const [skipped, setSkipped] = useState(0);
   const [wrong, setWrong] = useState(0);

   // const capitalizeWord = (word) => {
   //    return word.charAt(0).toUpperCase() + word.slice(1);
   // };

   // const handleWord = () => {
   //    const random = Math.floor(Math.random() * words.length);

   //    setWord((word) => words[number].es);
   //    setIcon((icon) => words[number].icon);
   //    console.log(`przed handleWord ${number}`);
   //    setNumber((number) => random);
   // };

   const togglePop = () => {
      setSeen((seen) => !seen);
   };

   const handleChange = (e) => {
      let myInput = e.target.value;
      // myInput = myInput.toLowerCase();
      setInput((input) => myInput);
   };

   const handleScore = () => {
      if (wordEn === input) {
         setCorret((correct) => correct + 1);
         console.log(wordEn);
      } else if (input !== wordEn) {
         setWrong((wrong) => wrong + 1);
      }
   };

   const generateNumber = () => {
      const random = Math.floor(Math.random() * words.length);
      setNumber((number) => random);
   };

   const finalResult = words.map((item) => {
      const en = item.en;
      const es = item.es;
      const icon = item.icon;

      arrEn.push(en);
      arrEs.push(es);
      arrIcon.push(icon);

      return arrEn + arrEs + arrIcon;
   });

   const handleWord = () => {
      generateNumber();
      setWordEs((wordEs) => arrEs[number]);
      setWordEn((wordEn) => arrEn[number]);
      setIcon((icon) => arrIcon[number]);
      console.log(wordEn);
      flag = false;
   };

   console.log(arrEs, arrEn);

   const startApp = (e) => {
      if (flag) {
         return handleWord();
      } else if (input === "") {
         return togglePop();
      }
      handleScore();
      setInput((input) => "");
   };

   return (
      <div className='App'>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <header>
            <h1>"The limits of my language mean the limits of my world."</h1>
         </header>
         <nav>
            <div className='btn' onClick={togglePop}></div>
            {seen ? <ErrorPopUp toggle={togglePop} /> : null}

            <div className='logo glass2'>Flashcards</div>
            <ul className='glass2'>
               <li>
                  <a href={url}>
                     {" "}
                     <img src={england} alt='' />{" "}
                  </a>
                  <a className='menuelement' href={url}>
                     English
                  </a>
               </li>
               <li>
                  <a href={url}>
                     {" "}
                     <img src={spain} alt='' />{" "}
                  </a>
                  <a className='menuelement' href={url}>
                     Spanish
                  </a>
               </li>
               <li>
                  <a>
                     {" "}
                     <img src={skip} alt='' />{" "}
                  </a>
                  <a className='menuelement' href={url}>
                     Next Word
                  </a>
               </li>
               <li>
                  <a href={url}>
                     {" "}
                     <img src={reset} alt='' />{" "}
                  </a>
                  <a className='menuelement' href={url}>
                     Reset
                  </a>
               </li>
               <li>
                  <a href={url}>
                     {" "}
                     <img src={add} alt='' />{" "}
                  </a>
                  <a className='menuelement' href={url}>
                     Add Word
                  </a>
               </li>
               <li>
                  <a href={url}>
                     {" "}
                     <img src={help} alt='' />{" "}
                  </a>
                  <a className='menuelement' href={url}>
                     Help
                  </a>
               </li>
               <li>
                  <a href='#'>
                     {" "}
                     <img src={night} alt='' />{" "}
                  </a>
                  <a className='menuelement' href='#'>
                     Night Mode
                  </a>
               </li>
            </ul>
         </nav>
         <main>
            <section className='panel glass2'>
               <div className='results'>
                  <div className='boards'>
                     <div className='singleboard'>
                        <p>Correct</p>
                        <div className='good'>
                           <span>{correct}</span>
                        </div>
                     </div>
                     <div className='singleboard'>
                        <p>Skipped</p>
                        <div className='skipped'>
                           <span>{skipped}</span>
                        </div>
                     </div>
                     <div className='singleboard'>
                        <p>Wrong</p>
                        <div className='bad'>
                           <span>{wrong}</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='icon'>
                  <div className='png'>
                     {number ? <img src={icon} alt='' /> : ""}
                  </div>
               </div>
            </section>
            <section className='words glass'>
               <div className='card1'>
                  <div className='bar'>
                     <div className='flag'>
                        <img src={esFlag} alt='' />
                     </div>
                     <div className='lang'>Spanish</div>
                  </div>
                  <div className='word1'>
                     <p>{wordEs ? wordEs : "Press Start"}</p>
                  </div>
               </div>
               <div className='card2'>
                  <div className='bar'>
                     <div className='flag'>
                        <img src={enFlag} alt='' />
                     </div>
                     <div className='lang'>English</div>
                  </div>
                  <div className='word2'>
                     <input
                        onChange={handleChange}
                        value={input}
                        className='input'
                        type='text'
                        placeholder='Add your translation here'
                        id='fname'
                        name='fname'
                     />
                  </div>
               </div>
               <div className='submit'>
                  <button onClick={startApp}>
                     {wordEs ? "V E R I F Y" : "S T A R T "}
                  </button>
               </div>
            </section>
         </main>
         <footer>
            <h1>Flashcards 2021</h1>
         </footer>
      </div>
   );
}

export default App;
