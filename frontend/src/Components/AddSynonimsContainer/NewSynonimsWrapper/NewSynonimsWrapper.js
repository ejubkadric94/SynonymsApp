import React from 'react';
import AddNewSynonim from './AddNewSynonim/AddNewSynonim';
import './NewSynonimsWrapper.css';

const NewSynonimsWrapper = ({ synonims, addNewSynonim }) => {
    const addedSynonimsList = synonims.map(synonim => <li className="added-synonim-list-item" key={synonim}>{synonim}</li>)

    return (
        <div className="new-synonims-wrapper">
            {!!synonims.length && (<h5>Added synonims:</h5>)}
            <ul>{addedSynonimsList}</ul>
            <AddNewSynonim addNewSynonim={addNewSynonim} />
        </div>
    );
};

export default NewSynonimsWrapper;
