import { useState } from "react";

export default function MyComp() {
  const [hello, setHello] = useState("Hello");

  function Change(e) {
    setHello(e.target.value);
  }

  function Reset() {
    setHello("Hello");
  }

  return (
    <div>
      <input onChange={Change} value={hello}></input>
      <p>You typed : {hello}</p>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}