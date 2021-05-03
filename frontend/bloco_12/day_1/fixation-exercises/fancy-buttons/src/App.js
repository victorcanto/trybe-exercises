import React from 'react';
import './App.css';

const colorBr = {
  red: 'vermelho',
  blue: 'azul',
  black: 'preto',
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
    }
    if (e.target.value === 'blue') {
      this.setState((previousState, _props) => ({
        qtdeClicksBlue: previousState.qtdeClicksBlue + 1,
      }));
    } else {
      this.setState((previousState, _props) => ({
        qtdeClicksBlack: previousState.qtdeClicksBlack + 1,
      }));
    }
    console.log(`Você clicou no botão ${colorBr[e.target.value]}`);
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
