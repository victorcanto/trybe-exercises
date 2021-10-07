import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return <Pokedex data={pokemons} />;
}

export default App;
