import React from 'react';
import './AddSynonymsTitle.css';

const AddSynonymsTitle = () => (
    <div className="add-synonyms-title">
        <h2>Add new synonyms</h2>
        <span
            className="info"
            title="Input field located below is used to enter new words which are synonyms for each other"
        >
            ?
        </span>
    </div>
);

export default AddSynonymsTitle;
