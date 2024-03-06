import React, { useState } from 'react';
import './App.css';
import Componente2 from './Componente2';
import Componente3 from './Componente3';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="title">
        <h1 style={{ color: text ? 'blue' : 'black' }}>TITULO</h1>
      </div>
      <div>
        <Componente2 onTextChange={handleTextChange} />
      </div>
      <div>
        <Componente3 texto={text}/>
      </div>
    </div>
  );
}

export default App;