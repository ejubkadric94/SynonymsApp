import React from 'react';
import './PaddedContainer.css';

const PaddedContainer = ({ children, className }) => (
    <div className={`padded-container ${className}`}>
        {children}
    </div>
);

export default PaddedContainer;
