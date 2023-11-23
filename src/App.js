import "./styles.css";

export default function App() {
  let tabs = ["référencement", "rédaction web", "google analytics"];

  return (
    <div className="App">
      <h1>Bienvenue</h1>
      <ul>
        {tabs.map((tab) => (
          <li>{tab}</li>
        ))}
      </ul>
      <button>Valider</button>
    </div>
  );
}
