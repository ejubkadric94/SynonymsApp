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
        <>
            <AddNewSynonym addNewSynonym={addNewSynonym} />
            <AddedSynonymsList
                removeSynonym={removeSynonym}
                synonyms={synonyms}
            />
        </>
    );
};

export default NewSynonymsWrapper;
