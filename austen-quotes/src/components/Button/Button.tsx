import React from 'react';
import axios from 'axios';

const Button = ({generateQuote}: { generateQuote: ()=> void} ) => {

    return (
        <>
            <button onClick={() => generateQuote()}>Generate Quote</button>
        </>
    )
}

export default Button;
