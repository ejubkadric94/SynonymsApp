import React from 'react';
import './ResetStorageButton.css';
import { removeAllSynonyms } from '../../Api/SynonymsApi';

const ResetStorageButton = () => (
    <button
        className="reset-storage-button"
        title="Remove all saved synonyms from backend storage"
        onClick={async () => await removeAllSynonyms()}
    >
        X
    </button>
);

export default ResetStorageButton;
