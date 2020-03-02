import { executeRequest } from "./BaseApi";
import { getSearchSynonymsUrl, getAddSynonymsUrl } from "./BackendPaths";

export const searchForSynonyms = async word => {
    const getSynonymsRequest = await executeRequest(
        getSearchSynonymsUrl(word),
        'GET',
    );
    return await getSynonymsRequest.json();
};

export const addSynonyms = async (word, synonyms) => {
    try {
        const addSynonymsRequest = await executeRequest(
            getAddSynonymsUrl(),
            'POST',
            { word, synonyms }
        );
        return addSynonymsRequest;
    } catch (error) {
        console.log(error);
    }

};