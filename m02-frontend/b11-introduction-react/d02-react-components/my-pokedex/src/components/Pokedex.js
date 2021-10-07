import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './CSS/Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.data;
    return (
      <ul className='pokemon_list'>
        {pokemons.map((pokemon, index) => (
          <li key={index} itemID={index}>
            <Pokemon pokemon={pokemon} />
          </li>
        ))}
      </ul>
    );
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.object,
};

export default Pokedex;
