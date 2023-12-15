import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Pizza",
    count: 0,
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2018-02/2/5/asset/buzzfeed-prod-fastlane-03/sub-buzz-4905-1517568571-3.png",
    prix: 15,
  },
  {
    id: 1,
    name: "Spaghetti",
    count: 0,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/19/e6/9f/b8/il-da-vinci.jpg",
    prix: 12,
  },
  {
    id: 2,
    name: "Gâteau",
    count: 0,
    image: "https://pbs.twimg.com/media/EjafptsWAAEgXZj.jpg",
    prix: 20,
  },
];
export default function ShoppingList() {
  const [counters, setCounters] = useState(initialProducts);
  const [panier, setPanier] = useState({items:0, amount: 0});
  const [articles, setArticles] = useState(0);

  function ClickIncrement(idtruc) {
      const updatedshoplist = counters.map((counter) => {
        if (counter.id === idtruc) {
          return {
            ...counter,
            count: counter.count + 1,
          };
        } else {
          return counter;
        }
      });
    setCounters(updatedshoplist);

    // const SelectedItem = counters.find((counter) => counter.id === id);
    // if (SelectedItem){
    //   setPanier({
    //     items: panier.count + 1,
    //     amount: panier.amount + SelectedItem.prix,

    //   });
    // };
  };

  function ClickDecrement(idtruc) {
    setCounters(
      counters.map((counter) => {
        if (counter.id === idtruc) {
          return {
            ...counter,
            count: counter.count - 1,
          };
        } else {
          return counter;
        }
      }),
    );
    setArticles(articles - 1);
  }

  return (
    <div className="liste">
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <img src={counter.image} />
            {counter.name} (<b>{counter.count}</b>)
            <button
              onClick={() => {
                ClickIncrement(counter.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                ClickDecrement(counter.id);
              }}
            >
              -
            </button>
            <p>{counter.prix}€</p>
          </li>
        ))}
      </ul>

      <p>Nombre d'articles : {articles}</p>
      <p>Montant du panier : {panier}</p>
    </div>
  );
}