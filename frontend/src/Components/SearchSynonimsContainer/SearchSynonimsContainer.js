import React, { useState } from 'react';
import './SearchSynonimsContainer.css';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import ExistingSynonimsList from './ExistingSynonimsList/ExistingSynonimsList';

const SearchSynonimsContainer = () => {
    const [searchValue, setSearchValue] = useState('');
    return <PaddedContainer className="search-synonims-container">
        <h2>Search for synonims</h2>
        <div className="search-value">
            <span>Word:</span>
            <input value={searchValue} onChange={event => setSearchValue(event.target.value)} />
        </div>
        <ExistingSynonimsList word={searchValue} />
    </PaddedContainer>;
};

export default SearchSynonimsContainer;
