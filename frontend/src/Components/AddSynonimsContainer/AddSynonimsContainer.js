import React, { useState } from 'react';
import './AddSynonimsContainer.css';
import PaddedContainer from '../PaddedContainer/PaddedContainer';
import NewSynonimsWrapper from './NewSynonimsWrapper/NewSynonimsWrapper';

const AddSynonimsContainer = () => {
    const [word, setWord] = useState('');
    const [synonims, setSynonims] = useState(new Set());

    const onAddNewSynonim = newSynonim => {
        setSynonims(new Set([...synonims, newSynonim]));
    };

    const shouldDisableSubmit = !word || !synonims.size;
    return <PaddedContainer className="add-synonims-container">
        <h2>Add new synonims</h2>
        <div className="search-value">
            <span>Word:</span>
            <input value={word} onChange={event => setWord(event.target.value)} />
        </div>
        <NewSynonimsWrapper synonims={Array.from(synonims)} addNewSynonim={onAddNewSynonim} />
        <button disabled={shouldDisableSubmit}>Submit</button>
    </PaddedContainer>;
};

export default AddSynonimsContainer;
