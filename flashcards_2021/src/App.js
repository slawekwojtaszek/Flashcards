import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorPopUp from "./components/ErrorPopUp";
import Generate from "./components/GenerateNumber";

import { Nav } from "./components/Nav";
import { Header } from "./components/Header";

const words = [
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
];

function App() {
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
         // console.log(wordEn);
      } else if (input !== wordEn) {
         setWrong((wrong) => wrong + 1);
      }
   };

   // const handleWord = () => {
   //    generateNumber();
   //    setIcon((icon) => arrIcon[number]);
   //    setWordEs((wordEs) => arrEs[number]);
   //    setWordEn((wordEn) => arrEn[number]);

   //    console.log(Object.values(words[1]));
   // };

   const startApp = (e) => {
      // if (input === "") {
      //    return alert("dfdd");
      // }
      handleScore();

      setInput((input) => "");
   };

   return (
      <div className='App'>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <Header />
         <Nav />
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
                     {number ? <img src={icon} alt='' /> : null}
                  </div>
               </div>
            </section>
            <section className='words glass'>
               <div className='card1'>
                  <div className='bar'>
                     <div className='flag'>
                        <img src='' alt='' />
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
                        <img src='' alt='' />
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
            <h1>Footer</h1>
         </footer>
      </div>
   );
}

export default App;
