import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Profile from "./component/Profile.js";
import MyFirstComponent from "./component/MyFirstComponent";
import Avatar from "./component/Avatar";
import Character from "./component/Character";
import Myfirstcomp from "./component/Myfirstcomp";
import Card from "./component/Card";
import Counter from "./component/counter_state_hook.js";
import Compteur from "./component/Compteur.js";
import MyComp from "./component/MyComp.js";
import MyCheckLike from "./component/MyCheckLike.js";
import Paola from "./component/Paola.js";
import MyForm from "./component/MyForm.js";
import MyFormImage from "./component/MyFormImage.js";
import Maliste from "./component/Maliste.js";
import Malisteadd from "./component/Malisteadd.js";
import ShoppingList from "./component/ShoppingList.js";


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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
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
    <Malisteadd />
    <ShoppingList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
