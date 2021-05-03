import React from 'react';
import './App.css';

const handleClick = (e) => {
  const colorBr = {
    red: 'vermelho',
    blue: 'azul',
    black: 'preto',
  };
  return console.log(`Você clicou no botão ${colorBr[e.target.value]}`)
};

class App extends React.Component {
  render() {
    return (
      <div className='buttons_container'>
        <button className='red_button' onClick={handleClick} value='red'>
          Red
        </button>
        <button className='blue_button' onClick={handleClick} value='blue'>
          Blue
        </button>
        <button className='black_button' onClick={handleClick} value='black'>
          Black
        </button>
      </div>
    );
  }
}

export default App;
