import React from 'react';
import './ResetStorageButton.css';
import { removeAllSynonyms } from '../../Api/SynonymsApi';

const ResetStorageButton = () => (
    <button
        className="reset-storage-button button-large"
        title="Remove all saved synonyms from backend storage"
        onClick={async () => await removeAllSynonyms()}
    >
        Clear all synonyms
    </button>
);

export default ResetStorageButton;
