import React, { useState } from 'react';

interface TitleProps {
    setQuote: (title: string) => void,
    hasSelectedTitle: boolean,
    setHasSelectedTitle: (hasTitle: boolean) => void
}

const TitleSelection: React.FC<TitleProps> = (props: TitleProps) => {
    const { setQuote, hasSelectedTitle, setHasSelectedTitle } = props;
    const bookTitles: string[] = ["Pride and Prejudice", "Northanger Abbey"]

    const [selectedTitle, setSelectedTitle] = useState<string>(bookTitles[0]);

    if (hasSelectedTitle) {
        return (
            <>
                <select value={selectedTitle} onChange={e => setSelectedTitle(e.target.value)}>
                    {bookTitles.map(title => (
                        <option key={title} value={title}>{title}</option>
                    ))}
                </select>
            </>
        )
    } else {
        return (
            <>
                <input type="checkbox" defaultChecked={hasSelectedTitle} onChange={() => setHasSelectedTitle(!hasSelectedTitle)} /> Select book title (optional)
            </>
        )
    }

}

export default TitleSelection;