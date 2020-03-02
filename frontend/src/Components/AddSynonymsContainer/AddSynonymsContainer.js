import React, { useState } from 'react';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import NewSynonymsWrapper from './NewSynonymsWrapper/NewSynonymsWrapper';
import { addSynonyms } from '../../Api/SynonymsApi';

const AddSynonymsContainer = () => {
    const [synonyms, setSynonyms] = useState(new Set());

    const onAddNewSynonym = newSynonym => {
        setSynonyms(new Set([...synonyms, newSynonym]));
    };
    const onResetAddedSynonymsList = () => setSynonyms(new Set());
    const onSubmit = async () => {
        if (await addSynonyms(Array.from(synonyms))) {
            onResetAddedSynonymsList();
        }
    };

    const shouldDisableSubmit = synonyms.size < 2;
    const submitButtonTooltipText = shouldDisableSubmit ?
        'At least two synonym must be present!' : 'Submit synonims';
    return ( 
        <PaddedContainer>
            <h2>Add new synonyms</h2>
            <NewSynonymsWrapper
                synonyms={Array.from(synonyms)}
                addNewSynonym={onAddNewSynonym}
                onResetAddedSynonymsList={onResetAddedSynonymsList}
            />
            <button
                title={submitButtonTooltipText}
                disabled={shouldDisableSubmit}
                onClick={onSubmit}
            >
                Submit
            </button>
        </PaddedContainer>
    );
};

export default AddSynonymsContainer;
