import React, { useState } from 'react';
import './AddSynonymsContainer.css';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import NewSynonymsWrapper from './NewSynonymsWrapper/NewSynonymsWrapper';

const AddSynonymsContainer = () => {
    const [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState(new Set());

    const onAddNewSynonym = newSynonym => {
        setSynonyms(new Set([...synonyms, newSynonym]));
    };

    const shouldDisableSubmit = !word || !synonyms.size;
    return <PaddedContainer className="add-synonyms-container">
        <h2>Add new synonyms</h2>
        <div className="search-value">
            <span>Word:</span>
            <input value={word} onChange={event => setWord(event.target.value)} />
        </div>
        <NewSynonymsWrapper synonyms={Array.from(synonyms)} addNewSynonym={onAddNewSynonym} />
        <button disabled={shouldDisableSubmit}>Submit</button>
    </PaddedContainer>;
};

export default AddSynonymsContainer;
