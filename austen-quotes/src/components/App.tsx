import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button/Button';
import Quote from './Quote/Quote';
import TitleSelection from './TitleSelection/TitleSelection';

function App() {
  const [quote, setQuote] = useState("");
  const [bookTitle, setBookTitle] = useState(null);

  const generateQuote = () => {
    axios.get('https://jane-austen-quote-api.herokuapp.com/random-quote')
        .then(response => {
          setQuote(response.data.randomQuote);
        })
}

  return (
    <div className="App">
      <header className="App-header">
        Jane Austen Quote Generator
      </header>
      {/* image here */}
      <p>
        <TitleSelection setQuote={setQuote} />
      </p>
      <Button generateQuote={generateQuote} />
      <p>
        <Quote quote={quote} />
      </p>
    </div>
  );
}

export default App;
