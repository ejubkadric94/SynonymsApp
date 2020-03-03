import React from 'react';
import './AddedSynonymListItem.css';

const AddedSynonymListItem = ({ synonym, removeSynonym }) => (
    <li className="added-synonym-list-item" key={synonym}>
        <div className="content">
            <div className="label">{synonym}</div>
            <button
                className="remove-word"
                onClick={() => removeSynonym(synonym)}>X</button>
        </div>
    </li>
);

export default AddedSynonymListItem;
