import React from 'react';

const Componente2 = ({ onTextChange }) => {
  return (
    <div className='componente2'>
      <input
        type="text"
        name=""
        placeholder="Escriba un nombre"
        onChange={onTextChange}
      />
    </div>
  );
};

export default Componente2;