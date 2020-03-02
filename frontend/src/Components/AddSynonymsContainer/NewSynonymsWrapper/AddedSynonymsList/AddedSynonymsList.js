import React from 'react';
import './AddedSynonymsList.css';

const AddedSynonymsList = ({ synonyms, onResetAddedSynonymsList }) => {
    if (!synonyms.length) {
        return null;
    }

    const addedSynonymsList = synonyms.map(synonym => <li className="added-synonym-list-item" key={synonym}>{synonym}</li>);

    return (
        <div className="added-synonyms-list">
            <div className="title">
                <span>Added synonyms:</span>
                <button
                    title="Remove specified synonyms"
                    onClick={onResetAddedSynonymsList}
                >
                    x
                </button>
            </div>
            <ul>{addedSynonymsList}</ul>
        </div>
    )
};

export default AddedSynonymsList;
