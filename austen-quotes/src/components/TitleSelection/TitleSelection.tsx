import React, { ReactEventHandler, useState } from 'react';

interface TitleProps {
    bookTitle: string | null;
    setBookTitle: (title: string | null) => void,
    hasSelectedTitle: boolean,
    setHasSelectedTitle: (hasTitle: boolean) => void
}

const TitleSelection: React.FC<TitleProps> = (props: TitleProps) => {
    const { bookTitle, setBookTitle, hasSelectedTitle, setHasSelectedTitle } = props;

    const bookTitles: string[] = ["Pride and Prejudice", "Northanger Abbey"]

    const [selectedTitle, setSelectedTitle] = useState<string>(bookTitles[0]);

    const settingBookTitle = async (e: any) => {
       setBookTitle(e.target.value);
    }

    if (hasSelectedTitle) {
        return (
            <>
                <select
                    value={bookTitle || ""}
                    // onChange={e => setBookTitle(e.target.value)}>
                    onChange={settingBookTitle}>
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