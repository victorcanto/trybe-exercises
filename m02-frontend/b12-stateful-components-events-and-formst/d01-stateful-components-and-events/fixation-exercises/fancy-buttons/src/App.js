import React from 'react';
import './App.css';

const colorBr = {
  red: 'vermelha',
  blue: 'azul',
  black: 'preta',
};

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      qtdeClicksRed: 0,
      qtdeClicksBlue: 0,
      qtdeClicksBlack: 0,
    };
  }

  handleClick(e) {
    if (e.target.value === 'red') {
      this.setState((previousState, _props) => ({
        qtdeClicksRed: previousState.qtdeClicksRed + 1,
      }));
      if (this.state.qtdeClicksRed % 2 !== 0) {
        e.target.style.backgroundColor = '#50d43e';
      } else {
        e.target.style.backgroundColor = '';
      }
    }
    if (e.target.value === 'blue') {
      this.setState((previousState, _props) => ({
        qtdeClicksBlue: previousState.qtdeClicksBlue + 1,
      }));
      if (this.state.qtdeClicksBlue % 2 !== 0) {
        e.target.style.backgroundColor = '#50d43e';
      } else {
        e.target.style.backgroundColor = '';
      }
    }
    if (e.target.value === 'black') {
      this.setState((previousState, _props) => ({
        qtdeClicksBlack: previousState.qtdeClicksBlack + 1,
      }));
      if (this.state.qtdeClicksBlack % 2 !== 0) {
        e.target.style.backgroundColor = '#50d43e';
      } else {
        e.target.style.backgroundColor = '';
      }
    }
    console.log(`Cor ${colorBr[e.target.value]}`);
  }

  render() {
    return (
      <div className='buttons_container'>
        <button className='red_button' onClick={this.handleClick} value='red'>
          Red
        </button>
        <span>{`Número de cliques: ${this.state.qtdeClicksRed}`}</span>
        <button className='blue_button' onClick={this.handleClick} value='blue'>
          Blue
        </button>
        <span>{`Número de cliques: ${this.state.qtdeClicksBlue}`}</span>
        <button
          className='black_button'
          onClick={this.handleClick}
          value='black'
        >
          Black
        </button>
        <span>{`Número de cliques: ${this.state.qtdeClicksBlack}`}</span>
      </div>
    );
  }
}

export default App;
