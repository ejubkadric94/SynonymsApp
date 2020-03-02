import React, { useState } from 'react';
import './AddSynonymsContainer.css';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import NewSynonymsWrapper from './NewSynonymsWrapper/NewSynonymsWrapper';
import WordInput from '../WordInput/WordInput';

const AddSynonymsContainer = () => {
    const [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState(new Set());

    const onAddNewSynonym = newSynonym => {
        setSynonyms(new Set([...synonyms, newSynonym]));
    };
    const onResetAddedSynonymsList = () => setSynonyms(new Set());

    const shouldDisableSubmit = !word || !synonyms.size;
    const submitButtonTooltipText = shouldDisableSubmit ?
        'A word and at least one synonym must be present!' : 'Submit synonims for specified word';
    return <PaddedContainer className="add-synonyms-container">
        <h2>Add new synonyms</h2>
        <WordInput
            label="Word:"
            value={word}
            onChange={event => setWord(event.target.value)}
        />
        <NewSynonymsWrapper
            isDisabled={!word}
            synonyms={Array.from(synonyms)}
            addNewSynonym={onAddNewSynonym}
            onResetAddedSynonymsList={onResetAddedSynonymsList}
        />
        <button title={submitButtonTooltipText} disabled={shouldDisableSubmit}>Submit</button>
    </PaddedContainer>;
};

export default AddSynonymsContainer;
