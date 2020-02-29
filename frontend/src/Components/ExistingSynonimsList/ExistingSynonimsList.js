import React, { useState, useEffect } from 'react';
import './ExistingSynonimsList.css';

const ExistingSynonimsList = ({ word }) => {
    useEffect(() => {
        console.log('looking for ', word);
    }, [word])
    return <div>
        List
    </div>;
};

export default ExistingSynonimsList;
