import React, { useEffect } from 'react';
import './ExistingSynonimsList.css';

const ExistingSynonimsList = ({ word }) => {
    useEffect(() => {
        console.log('looking for ', word);
    }, [word])
    return <div className="existing-synonims-list">
        
    </div>;
};

export default ExistingSynonimsList;
