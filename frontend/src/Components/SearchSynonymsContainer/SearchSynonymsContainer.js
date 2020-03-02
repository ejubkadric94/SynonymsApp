import React, { useState } from 'react';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import ExistingSynonymsList from './ExistingSynonymsList/ExistingSynonymsList';
import SearchInput from '../SearchInput/SearchInput';

const SearchSynonymsContainer = () => {
    const [searchValue, setSearchValue] = useState('');
    return <PaddedContainer>
        <h2>Search for synonyms</h2>
        <SearchInput
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        />
        <ExistingSynonymsList word={searchValue} />
    </PaddedContainer>;
};

export default SearchSynonymsContainer;
