import React from 'react';
import PropTypes from 'prop-types';
import './CSS/Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='info_pokemon'>
        <div className='name_pokemon'>
          <p>{name}</p>
        </div>
        <div className='type_pokemon'>
          <p>{type}</p>
        </div>
        <div className='average_pokemon'>
          <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <div className='image_pokemon'>
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
};

export default Pokemon;
