import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);

  function ClickMoins() {
    setCount(count - 1);
  }

  function ClickPlus() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Compteur</h1>
      <p>{count}</p>
      <button onClick={ClickMoins}>-</button>
      <button onClick={ClickPlus}>+</button>
    </div>
  );
}