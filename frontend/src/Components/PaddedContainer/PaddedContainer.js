import React from 'react';
import './PaddedContainer.css';

const PaddedContainer = ({ children }) => (
    <div className="padded-container">
        {children}
    </div>
);

export default PaddedContainer;
