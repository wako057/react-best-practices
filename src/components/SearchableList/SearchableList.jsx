import { useState } from "react";

export default function SearchableList({ items, children }) {
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
                {searchResults.map((item, index) => (
                    <li key={index}>
                        {children(item)}
                        {/* {item.toString()} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};