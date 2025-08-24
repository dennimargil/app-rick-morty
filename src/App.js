import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import { useState } from "react";
import Characters from "./components/Characters";
import Character from "./pages/Character";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick & Morty</h1>

          <Routes>
        <Route
              path="/"
              element={
                characters ? (
                  <Characters characters={characters} setCharacters={setCharacters} />
                ) : (
                  <>
                    <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
                    <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
                  </>
                )
              }
            />

        {/* DETALLE DE PERSONAJE */}
          <Route path="/character/:id" element={<Character characters={characters} />} />
          </Routes>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
