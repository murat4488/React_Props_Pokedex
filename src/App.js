import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex list={pokemons} />
    </div>
  );
}

export default App;
