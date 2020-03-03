import React from 'react';
import AddNewSynonym from './AddNewSynonym/AddNewSynonym';
import './NewSynonymsWrapper.css';
import AddedSynonymsList from './AddedSynonymsList/AddedSynonymsList';

const NewSynonymsWrapper = ({
    synonyms,
    addNewSynonym,
    removeSynonym,
}) => {

    return (
        <div className="new-synonyms-wrapper">
            <AddNewSynonym addNewSynonym={addNewSynonym} />
            <AddedSynonymsList
                removeSynonym={removeSynonym}
                synonyms={synonyms}
            />
        </div>
    );
};

export default NewSynonymsWrapper;
