import React, { useState } from 'react';
import './SearchSynonymsContainer.css';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import ExistingSynonymsList from './ExistingSynonymsList/ExistingSynonymsList';

const SearchSynonymsContainer = () => {
    const [searchValue, setSearchValue] = useState('');
    return <PaddedContainer className="search-synonyms-container">
        <h2>Search for synonyms</h2>
        <div className="search-value">
            <span>Word:</span>
            <input value={searchValue} onChange={event => setSearchValue(event.target.value)} />
        </div>
        <ExistingSynonymsList word={searchValue} />
    </PaddedContainer>;
};

export default SearchSynonymsContainer;
