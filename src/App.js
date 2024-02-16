import './App.css';
import Logo from './images/Logo.png'
import Botón from './components/botón.js'
import Pantalla from './components/Pantalla.js';
import BotónClear from './components/botónClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const[input, setInput] = useState('')
  const agregarInput = val => {
    setInput(input + val)
  };
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("ingrese valores para realizar los cálculos.")
    }
  };
  return (
    <div className="App">
      <div className='ZilmakWeb-logo'>
        <img src={Logo} className='ZilmakWeb-logo__img' alt='Logo de ZilmakWeb'/>
      </div>
      <div className='contenedor-principal'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Botón manejarClic={agregarInput}>1</Botón>
          <Botón manejarClic={agregarInput}>2</Botón>
          <Botón manejarClic={agregarInput}>3</Botón>
          <Botón manejarClic={agregarInput}>+</Botón>
        </div>
        <div className='fila'>
          <Botón manejarClic={agregarInput}>4</Botón>
          <Botón manejarClic={agregarInput}>5</Botón>
          <Botón manejarClic={agregarInput}>6</Botón>
          <Botón manejarClic={agregarInput}>-</Botón>
        </div>
        <div className='fila'>
          <Botón manejarClic={agregarInput}>7</Botón>
          <Botón manejarClic={agregarInput}>8</Botón>
          <Botón manejarClic={agregarInput}>9</Botón>
          <Botón manejarClic={agregarInput}>*</Botón>
        </div>
        <div className='fila'>
          <Botón manejarClic={calcularResultado}>=</Botón>
          <Botón manejarClic={agregarInput}>0</Botón>
          <Botón manejarClic={agregarInput}>.</Botón>
          <Botón manejarClic={agregarInput}>/</Botón>
        </div>
        <div className='fila'>
          <BotónClear manejarClear={() => setInput('')}>Corrector total</BotónClear>
        </div>
      </div>
    </div>
  );
}

export default App;
