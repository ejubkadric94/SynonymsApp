import React, { useEffect } from 'react';
import './ExistingSynonymsList.css';

const ExistingSynonymsList = ({ word }) => {
    useEffect(() => {
        console.log('looking for ', word);
    }, [word])
    return <div className="existing-synonyms-list">
        
    </div>;
};

export default ExistingSynonymsList;
