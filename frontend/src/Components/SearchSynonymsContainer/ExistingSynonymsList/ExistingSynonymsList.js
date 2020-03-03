import React, { useEffect, useState } from 'react';
import './ExistingSynonymsList.css';
import { searchForSynonyms } from '../../../Api/SynonymsApi';
import Loader from '../../Loader/Loader';

let timeout;
const TIMEOUT_DURATION = 300;

const ExistingSynonymsList = ({ word }) => {
    const [synonyms, setSynonyms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (word) {
            setIsLoading(true);
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                const fetchData = async () => {
                    const fetchedSynonyms = await searchForSynonyms(word);
                    setSynonyms(fetchedSynonyms);
                    setIsLoading(false);
                }
                fetchData();
            }, TIMEOUT_DURATION);
        } else if (synonyms.length) {
            setSynonyms([]);
            setIsLoading(false);
        }
    }, [word, synonyms.length]);

    const content = isLoading ? <Loader /> : (
        <>
            {!!synonyms.length && (<div>Existing synonyms of word <i>{word}</i></div>)}
            <ul>
                {synonyms.map(synonym => <li key={synonym}>{synonym}</li>)}
            </ul>
        </>
    );
    
    return <div className="existing-synonyms-list">
      {content}  
    </div>;
};

export default ExistingSynonymsList;
