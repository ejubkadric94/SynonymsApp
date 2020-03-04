import React from 'react';
import './AddedSynonymListItem.css';

const AddedSynonymListItem = ({ synonym, removeSynonym }) => (
    <li className="added-synonym-list-item">
        <div className="content">
            <div className="item-label" title={synonym}>{synonym}</div>
            <button
                className="remove-word"
                title="Remove this word from synonyms list"
                onClick={() => removeSynonym(synonym)}>X</button>
        </div>
    </li>
);

export default AddedSynonymListItem;
