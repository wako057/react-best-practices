import { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
    const [searchTerm, setSearchTerms] = useState('');

    const searchResults = items.filter(item => 
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    function handleChange(event) {
        setSearchTerms(event.target.value);
    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange}/>
            <ul>
                {searchResults.map((item) => (
                    <li key={itemKeyFn(item)}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
};