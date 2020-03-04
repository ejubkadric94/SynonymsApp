import React from 'react';
import AddNewSynonym from './AddNewSynonym/AddNewSynonym';
import './AddSynonymsBox.css';
import AddedSynonymsList from './AddedSynonymsList/AddedSynonymsList';

const AddSynonymsBox = ({
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

export default AddSynonymsBox;
