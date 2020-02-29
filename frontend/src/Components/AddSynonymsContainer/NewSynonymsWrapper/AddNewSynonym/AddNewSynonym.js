import React, { useState } from 'react';
import './AddNewSynonym.css';

const AddNewSynonym = ({ addNewSynonym }) => {
    const [newSynonymValue, setNewSynonymValue] = useState('');

    const onAddNewSynonym = () => {
        const trimmedValue = newSynonymValue.trim();
        if (!trimmedValue) {
            alert('Please enter a synonym first');
            return;
        }
        if (!(/^[a-zA-Z ]+$/.test(newSynonymValue))) {
            // Allow only english letter and space
            alert('Only English letters are allowed');
            return;
        }
        addNewSynonym(newSynonymValue);
        setNewSynonymValue('');
    }

    return (
        <div className="add-new-synonym">
            <input value={newSynonymValue} onChange={event => setNewSynonymValue(event.target.value)} />
            <button onClick={onAddNewSynonym}>&#43;</button>
        </div>
    );
};

export default AddNewSynonym;
