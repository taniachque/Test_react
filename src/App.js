import { useState } from 'react';
import './App.css';
import Componente2 from './Componente2';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <div className="title">
        <h1 style={{ color: text ? 'red' : 'black' }}>TITULO</h1>
      </div>
      <div>
        <Componente2 onChange={(e) => setText(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
