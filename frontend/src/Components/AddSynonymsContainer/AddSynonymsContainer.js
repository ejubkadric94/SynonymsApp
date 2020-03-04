import React, { useState } from 'react';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import NewSynonymsWrapper from './NewSynonymsWrapper/NewSynonymsWrapper';
import { addSynonyms } from '../../Api/SynonymsApi';
import Loader from '../Loader/Loader';

const AddSynonymsContainer = () => {
    const [synonyms, setSynonyms] = useState(new Set());
    const [isSubmissionInProgress, setIsSubmissionInProgress] = useState(false);

    const onAddNewSynonym = newSynonym => {
        setSynonyms(new Set([...synonyms, newSynonym]));
    };
    const onResetAddedSynonymsList = () => setSynonyms(new Set());
    const onRemoveSynonym = synonym => {
        const newSet = new Set(synonyms);
        newSet.delete(synonym);
        setSynonyms(newSet);
    };
    const onSubmit = async () => {
        setIsSubmissionInProgress(true);
        if (await addSynonyms(Array.from(synonyms))) {
            onResetAddedSynonymsList();
            alert('Synonyms submitted successfully');
        } else {
            alert('Error while submitting synonyms');
        }
        setIsSubmissionInProgress(false);
    };

    const shouldDisableSubmit = synonyms.size < 2 && !isSubmissionInProgress;
    const submitButtonTooltipText = shouldDisableSubmit ?
        'At least two synonym must be present!' : 'Submit synonims';
    const content = isSubmissionInProgress ? <Loader /> : (
        <NewSynonymsWrapper
            synonyms={Array.from(synonyms)}
            addNewSynonym={onAddNewSynonym}
            removeSynonym={onRemoveSynonym}
        />
    );
    return ( 
        <PaddedContainer>
            <h2>Add new synonyms</h2>
            <div className="new-synonyms-wrapper">
                {content}
            </div>
            <button
                className="button-large"
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
