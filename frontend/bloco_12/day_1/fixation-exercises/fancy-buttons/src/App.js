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
  }

  handleClick(e) {
    return console.log(`Você clicou no botão ${colorBr[e.target.value]}`);
  }
  render() {
    return (
      <div className='buttons_container'>
        <button className='red_button' onClick={this.handleClick} value='red'>
          Red
        </button>
        <button className='blue_button' onClick={this.handleClick} value='blue'>
          Blue
        </button>
        <button
          className='black_button'
          onClick={this.handleClick}
          value='black'
        >
          Black
        </button>
      </div>
    );
  }
}

export default App;
