import React, { useState } from 'react';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import AddSynonymsBox from './AddSynonymsBox/AddSynonymsBox';
import { addSynonyms } from '../../Api/SynonymsApi';
import Loader from '../Loader/Loader';
import AddSynonymsTitle from './AddSynonymsTitle/AddSynonymsTitle';

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
        } else {
            alert('Error while submitting synonyms');
        }
        setIsSubmissionInProgress(false);
    };

    const shouldDisableSubmit = synonyms.size < 2 && !isSubmissionInProgress;
    const submitButtonTooltipText = shouldDisableSubmit ?
        'At least two synonym must be present!' : 'Submit synonims';
    const content = isSubmissionInProgress ? <Loader /> : (
        <AddSynonymsBox
            synonyms={Array.from(synonyms)}
            addNewSynonym={onAddNewSynonym}
            removeSynonym={onRemoveSynonym}
        />
    );
    return ( 
        <PaddedContainer>
            <AddSynonymsTitle />
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
