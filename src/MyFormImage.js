import { useState } from "react";

export default function MyFormImage() {
  const [form, setForm] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg"
    }
  });

  function Changet(e) {
    setForm({
      ...form,
      title: e.target.value
    });
  }

  function Changec(e) {
    setForm({
      ...form,
      city: e.target.value
    });
  }

  function Changei(e) {
    setForm({
      ...form,
      image: e.target.value
    });
  }

  return (
    <div>
      First name : <input onChange={Changet} value={form.artwork.title} />
      Last name : <input onChange={Changec} value={form.artwork.city} />
      Email : <input onChange={Changei} value={form.artwork.image} />
      <p>
        {form.artwork.title} by {form.name} (located in {form.artwork.city})
      </p>
      <img src={form.artwork.image} />
    </div>
  );
}