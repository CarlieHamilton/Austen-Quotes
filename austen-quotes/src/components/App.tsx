import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button/Button';
import Quote from './Quote/Quote';
import TitleSelection from './TitleSelection/TitleSelection';

function App() {
  const [quote, setQuote] = useState<string>("");
  const [bookTitle, setBookTitle] = useState<string | null>(null);
  const [hasSelectedTitle, setHasSelectedTitle] = useState<boolean>(false);

  const generateQuote = () => {
    if (!bookTitle) {
      axios.get('https://jane-austen-quote-api.herokuapp.com/random-quote')
          .then(response => {
            setQuote(response.data.randomQuote);
          })
    } else {
      axios.post('https://jane-austen-quote-api.herokuapp.com/random-quote-from-book',
      { title: bookTitle }, { headers: {'Content-Type': 'application/json' }})
        .then(response => {
          console.log("response", response)
          setQuote(response.data.randomQuote);
        })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Jane Austen Quote Generator
      </header>
      {/* image here */}
      <p>
        <TitleSelection bookTitle={bookTitle} setBookTitle={setBookTitle} setHasSelectedTitle={setHasSelectedTitle} hasSelectedTitle={hasSelectedTitle} />
      </p>
      <Button generateQuote={generateQuote} />
      <p>
        <Quote quote={quote} />
      </p>
    </div>
  );
}

export default App;
