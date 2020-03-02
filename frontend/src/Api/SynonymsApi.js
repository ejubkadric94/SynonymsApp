import { executeRequest } from "./BaseApi";
import { getSearchSynonymsUrl, getAddSynonymsUrl } from "./BackendPaths";

export const searchForSynonyms = async word => {
    const getSynonymsResponse = await executeRequest(
        getSearchSynonymsUrl(word),
        'GET',
    );
    return await getSynonymsResponse.json();
};

export const addSynonyms = async (word, synonyms) => {
    const addSynonymsResponse = await executeRequest(
        getAddSynonymsUrl(),
        'POST',
        { word, synonyms }
    );
    if (addSynonymsResponse.status !== 200) {
        const error = await addSynonymsResponse.json();
        alert(error.message);
        return false;
    }
    return true;
};
