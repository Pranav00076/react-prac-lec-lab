import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

const root = createRoot(document.getElementById("root"));

/* Header */
function Header() {
  return (
    <h1>Pokemon App</h1>
  );
}

/* Single Pokemon Card */
function PokemonCard({ name, url }) {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const abilityList = data.abilities.map(x => x.ability.name);
        setAbilities(abilityList);
      });
  }, [url]);

  return (
    <div className="card">
      <h3>{name}</h3>
      {abilities.map((ability, i) => (
        <p key={i}>{ability}</p>
      ))}
    </div>
  );
}

/* Main App */
function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="grid">
        {pokemon.map((poke, i) => (
          <PokemonCard key={i} name={poke.name} url={poke.url} />
        ))}
      </div>
    </div>
  );
}

/* Render */
root.render(<App />);