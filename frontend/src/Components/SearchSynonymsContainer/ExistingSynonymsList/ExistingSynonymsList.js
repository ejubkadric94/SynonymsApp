import React, { useEffect, useState } from 'react';
import './ExistingSynonymsList.css';
import { searchForSynonyms } from '../../../Api/SynonymsApi';

const ExistingSynonymsList = ({ word }) => {
    const [synonyms, setSynonyms] = useState([]);
    useEffect(() => {
        if (word) {
            const fetchData = async () => {
                const fetchedSynonyms = await searchForSynonyms(word);
                setSynonyms(fetchedSynonyms);
            }
            fetchData();
        } else if (synonyms.length) {
            setSynonyms([]);
        }
    }, [word, synonyms.length]);

    return <div className="existing-synonyms-list">
        <ul>
            {synonyms.map(synonym => <li key={synonym}>{synonym}</li>)}
        </ul>
    </div>;
};

export default ExistingSynonymsList;
