import React from 'react';
import AddNewSynonym from './AddNewSynonym/AddNewSynonym';
import './NewSynonymsWrapper.css';
import AddedSynonymsList from './AddedSynonymsList/AddedSynonymsList';

const NewSynonymsWrapper = ({
    synonyms,
    addNewSynonym,
    onResetAddedSynonymsList
}) => {

    return (
        <div className="new-synonyms-wrapper">
            <h4>Add new synonym:</h4>
            <AddNewSynonym addNewSynonym={addNewSynonym} />
            <AddedSynonymsList
                synonyms={synonyms}
                addNewSynonym={addNewSynonym}
                onResetAddedSynonymsList={onResetAddedSynonymsList}
            />
        </div>
    );
};

export default NewSynonymsWrapper;
