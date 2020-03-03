import React from 'react';
import './AddedSynonymsList.css';
import AddedSynonymListItem from './AddedSynonymListItem';

const AddedSynonymsList = ({ synonyms, removeSynonym }) => {
    if (!synonyms.length) {
        return null;
    }

    const addedSynonymsList = synonyms.map(synonym => (
        <AddedSynonymListItem
            synonym={synonym}
            key={synonym}AddedSynonymListItem
            removeSynonym={removeSynonym}
        />
    ));

    return (
        <div className="added-synonyms-list">
            <div className="title">Added synonyms:</div>
            <ol>
                {addedSynonymsList}
            </ol>
        </div>
    )
};

export default AddedSynonymsList;
