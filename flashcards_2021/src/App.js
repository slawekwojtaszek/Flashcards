import React, { useState } from "react";
import "./App.css";
import spain from "./png/002-spain.png";
import england from "./png/007-england.png";
import reset from "./png/006-circular-refreshment-arrow.png";
import add from "./png/005-add.png";
import skip from "./png/001-next-page.png";
import help from "./png/003-info.png";
import esFlag from "./png/001-spain.png";
import enFlag from "./png/002-united-kingdom.png";
import night from "./png/001-night-mode.png";

let nightVar = false;

let url = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";

let words = [
   {
      en: "Casa",
      es: "uno",
      id: 1,
   },
   {
      en: "Su Casa",
      es: "dos",
      id: 2,
   },
   {
      en: "Me Casa",
      es: "tres",
      id: 3,
   },
];

function App() {
   const [input, setInput] = useState("");
   const [number, setNumber] = useState(0);

   const generateRandomNumber = () => {
      const random = Math.floor(Math.random() * words.length);
      setNumber((number) => random);
   };
   // generateRandomNumber();

   // const hadnleWord = () => {
   //    const enWords = words[number].en;
   //    console.log(enWords);
   // };

   // const checkMyInput = () => {
   //    console.log(words);
   //    hadnleWord();
   // };

   const handleChange = (e) => {
      generateRandomNumber();
      setInput((input) => e.target.value);
      console.log(words[number].en);
   };

   const nightMode = () => {
      nightVar = !nightVar;
      console.log(nightVar);
   };

   let classDark = "night";
   let classBright = "App";

   return (
      <div className={nightVar ? classDark : classBright}>
         <div className='circle1'></div>
         <div className='circle2'></div>
         <header>
            <h1>"The limits of my language mean the limits of my world."</h1>
         </header>
         <nav>
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
                  <a href={url}>
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
                  <a onClick={nightMode} href='#'>
                     {" "}
                     <img src={night} alt='' />{" "}
                  </a>
                  <a onClick={nightMode} className='menuelement' href='#'>
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
                           <span>3</span>
                        </div>
                     </div>
                     <div className='singleboard'>
                        <p>Skipped</p>
                        <div className='skipped'>
                           <span>0</span>
                        </div>
                     </div>
                     <div className='singleboard'>
                        <p>Wrong</p>
                        <div className='bad'>
                           <span>0</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='icon'>
                  <div className='png'>
                     <h1>?</h1>
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
                     <p>{words[number].en}</p>
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
                  <button onSubmit={handleChange} onClick={handleChange}>
                     Check Translation
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
