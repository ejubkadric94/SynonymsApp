import React from 'react';
import AddNewSynonym from './AddNewSynonym/AddNewSynonym';
import './NewSynonymsWrapper.css';

const NewSynonymsWrapper = ({ synonyms, addNewSynonym }) => {
    const addedSynonymsList = synonyms.map(synonym => <li className="added-synonym-list-item" key={synonym}>{synonym}</li>)

    return (
        <div className="new-synonyms-wrapper">
            {!!synonyms.length && (<h5>Added synonyms:</h5>)}
            <ul>{addedSynonymsList}</ul>
            <AddNewSynonym addNewSynonym={addNewSynonym} />
        </div>
    );
};

export default NewSynonymsWrapper;
