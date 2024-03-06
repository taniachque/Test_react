import React, { useState} from 'react';

const Componente2 = () => {
    const [text, setText] = useState('');

    return ( 
        <input type="text" name="" value={text} placeholder="" onChange={(e) => setText(e.target.value)}/>
     );
}
 
export default Componente2;

