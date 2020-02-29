import React, { useState } from 'react';
import './AddNewSynonim.css';

const AddNewSynonim = ({ addNewSynonim }) => {
    const [newSynonimValue, setNewSynonimValue] = useState('');

    const onAddNewSynonim = () => {
        const trimmedValue = newSynonimValue.trim();
        if (!trimmedValue) {
            alert('Please enter a synonim first');
            return;
        }
        if (!(/^[a-zA-Z ]+$/.test(newSynonimValue))) {
            // Allow only english letter and space
            alert('Only English letters are allowed');
            return;
        }
        addNewSynonim(newSynonimValue);
        setNewSynonimValue('');
    }

    return (
        <div className="add-new-synonim">
            <input value={newSynonimValue} onChange={event => setNewSynonimValue(event.target.value)} />
            <button onClick={onAddNewSynonim}>&#43;</button>
        </div>
    );
};

export default AddNewSynonim;
