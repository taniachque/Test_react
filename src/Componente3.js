import React from 'react';

const generateletras = (texto) => {
  const letras = texto.split('');
  return letras.map((letra) => (
    <span key={letra} className="letra">
      {letra}
    </span>
  ));
};

const Componente3 = ({ texto }) => {
  const componentesLetras = generateletras(texto);

  return (
    <div className='componente3'>
        <div className="letras">
      {componentesLetras}
    </div>
    </div>
    
  );
};

export default Componente3;