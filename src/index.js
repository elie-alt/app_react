import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';


import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Profile from "./Profile.js";
import MyFirstComponent from "./MyFirstComponent";
import Myfirstcomp from "./Myfirstcomp";
import Card from "./Card";
import Counter from "./counter_state_hook.js";
import Compteur from "./Compteur.js";
import MyComp from "./MyComp.js";
import MyCheckLike from "./MyCheckLike.js";
import Paola from "./Paola.js";
import MyForm from "./MyForm.js";
import MyFormImage from "./MyFormImage.js";
import Maliste from "./Maliste.js";
import ShoppingList from "./ShoppingList.js";
import Appli from "./Appli.js";
import DocumentTitle from "./DocumentTitle.js";


//////
let user = { name: "John", years: 30 };
let { name, years: age, isAdmin = false } = user;
console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
//////
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
function topSalary() {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}
console.log(topSalary());
//////////
/////////
const info = [
  {
    id: "1",
    name: "Arya",
    house: "Stark",
    img: "https://i.imgflip.com/mseb4.jpg?a471768"
  },
  {
    id: "2",
    name: "Sansa",
    house: "Stark",
    img:
      "https://preview.redd.it/goofy-goober-v0-xhthy8x8j2ca1.jpg?width=640&crop=smart&auto=webp&s=92bd14b2368126dc151bd389be0167b67989fd18"
  },
  {
    id: "3",
    name: "Bran",
    house: "Stark",
    img:
      "https://static.tumblr.com/1eaf193e506de878c82919778cd87c8d/f9ehony/Ye0nh93fs/tumblr_static_4xwbkw8onag4sg4co48ockg4k_2048_v2.jpg"
  }
];



const Header = () => {
  return (
    <div className="header">
      <h1>En-tête</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan eros ac lectus ultrices, id tincidunt quam scelerisque.</p>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <h2>Contenu principal</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan eros ac lectus ultrices, id tincidunt quam scelerisque. Vestibulum ornare lectus ac nibh scelerisque, nec semper quam aliquam.</p>
    </div>
  );
};

const ChangeModeButton = ({ DarkMode }) => {
  return (
    <button
      type="button"
      onClick={DarkMode}>
      Changer de mode
    </button>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h3>Pied de page</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan eros ac lectus ultrices, id tincidunt quam scelerisque.</p>
      <ChangeModeButton/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* <App />
    <Profile />
    <MyFirstComponent prenom="Jean" color="red" />
    <Card infos={info} />
    <Myfirstcomp />
    <Counter />
    <Compteur />
    <MyComp />
    <MyCheckLike />
    <Paola />
    <MyForm />
    <MyFormImage />
    <Maliste />
    <ShoppingList />
    <Appli />
    <DocumentTitle/>*/}
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
