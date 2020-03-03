import React, { useState, useRef, useEffect } from 'react';
import './AddNewSynonym.css';
import { isWordValid, getWordError } from '../../../../Helpers/WordHelper';

const AddNewSynonym = ({ addNewSynonym }) => {
    const inputRef = useRef(null);
    const [newSynonymValue, setNewSynonymValue] = useState('');

    const onEnter = event => {
        if (event.key === 'Enter' && newSynonymValue) {
            onAddNewSynonym();
        }
    }

    useEffect(() => {
        const input = inputRef.current;
        input.addEventListener('keyup', onEnter);
        return () => input.removeEventListener('keyup', onEnter);
    });

    const onAddNewSynonym = () => {
        if (isWordValid(newSynonymValue)) {
            addNewSynonym(newSynonymValue);
            setNewSynonymValue('');
        } else {
            alert(getWordError(newSynonymValue));
        }
    }

    const buttonTooltipText = newSynonymValue ?
        'Add synonym to the list' : 'Please enter a synonym first';
    return (
        <div className="add-new-synonym">
            <input
                ref={inputRef}
                value={newSynonymValue}
                placeholder="New synonym"
                onChange={event => setNewSynonymValue(event.target.value)}
            />
            <button
                title={buttonTooltipText}
                onClick={onAddNewSynonym}
                disabled={!newSynonymValue}
                className="button-large"
            >
                Add
            </button>
        </div>
    );
};

export default AddNewSynonym;
