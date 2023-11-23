import { useState } from "react";

export default function Paola() {
  const [age, setAge] = useState(18);
  const [nom, setNom] = useState("Paola");

  function AddAge() {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
  }

  function Change(e) {
    setNom(e.target.value);
  }

  return (
    <div>
      <input onChange={Change} value={nom} />
      <button onClick={AddAge}>Increment Age</button>
      <p>
        Hello, {nom}. You are {age}.
      </p>
    </div>
  );
}