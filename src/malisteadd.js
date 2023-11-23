import { useState } from "react";
let nextId = 0;
export default function Malisteadd() {
  const [artists, setArtists] = useState([]);
  const [name, setName] = useState("");

  function Change(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1> Liste des artistes inspirants </h1>
      <input value={name} onChange={Change} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Ajouter
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
