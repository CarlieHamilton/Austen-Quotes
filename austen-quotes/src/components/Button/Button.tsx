import React from 'react';

const Button = ({generateQuote}: { generateQuote: ()=> void} ) => {

    return (
        <>
            <button onClick={() => generateQuote()}>Generate Quote</button>
        </>
    )
}

export default Button;
