import "./App.css";
import spain from "./png/002-spain.png";
import england from "./png/007-england.png";
import reset from "./png/006-circular-refreshment-arrow.png";
import add from "./png/005-add.png";
import skip from "./png/001-next-page.png";
import help from "./png/003-info.png";

let url = "https://css-tricks.com/snippets/css/a-guide-to-flexbox/";

function App() {
   return (
      <div className='App'>
         <header>
            <h1>This is a test message</h1>
         </header>
         <nav>
            <div className='logo'>LOGO</div>
            <ul>
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
            </ul>
         </nav>

         <main>
            <section class='panel'>
               <div className='results'>
                  <div className='headline'>
                     <h1>Score</h1>
                  </div>
                  <div className='boards'>
                     <div className='good'>
                        <span>3</span>
                     </div>
                     <div className='bad'>
                        <span>0</span>
                     </div>
                  </div>
               </div>
               <div className='icon'>
                  <div className='png'></div>
               </div>
            </section>
            <section class='words'>
               <div className='card1'>
                  <div className='bar'>
                     <div className='flag'>X</div>
                     <div className='lang'>Spanish</div>
                  </div>
                  <div className='word1'>
                     <p>Casa</p>
                  </div>
               </div>
               <div className='card2'>
                  <div className='bar'>
                     <div className='flag'>X</div>
                     <div className='lang'>English</div>
                  </div>
                  <div className='word2'>
                     <p>INPUT....</p>
                  </div>
               </div>
               <div className='submit'>
                  <div className='input'></div>
                  <div className='btn'></div>
               </div>
            </section>
         </main>
         <footer></footer>
      </div>
   );
}

export default App;
