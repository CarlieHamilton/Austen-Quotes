import React, { useState } from 'react';

const TitleSelection = ({setQuote}: { setQuote: (title:string)=> void} ) => {
    const bookTitles: string[] = [ "Select book title (optional)", "Pride and Prejudice", "Northanger Abbey"]

    const [selectedTitle, setSelectedTitle] = useState(bookTitles[0]);
    return (
        <>
            <select value={selectedTitle} onChange={e => setSelectedTitle(e.target.value)}>
                {bookTitles.map(title => (
                    <option key={title} value={title}>{title}</option>
                ))}
            </select>
        </>
    )
}

export default TitleSelection;