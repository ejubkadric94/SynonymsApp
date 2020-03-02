import { executeRequest } from "./BaseApi";
import { getSearchSynonymsUrl, getAddSynonymsUrl, getRemoveAllSynonymsUrl } from "./BackendPaths";

export const searchForSynonyms = async word => {
    try {
        const getSynonymsResponse = await executeRequest(
            getSearchSynonymsUrl(word),
            'GET',
        );
        return await getSynonymsResponse.json();
    } catch (err) {
        console.error(err);
    }
};

export const addSynonyms = async synonyms => {
    try {
        const addSynonymsResponse = await executeRequest(
            getAddSynonymsUrl,
            'POST',
            { synonyms }
        );
        if (addSynonymsResponse.status !== 200) {
            const error = await addSynonymsResponse.json();
            alert(error.message);
            return false;
        }
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const removeAllSynonyms = async () => {
    try {
        await executeRequest(getRemoveAllSynonymsUrl, 'DELETE');
        alert('Sucessfully removed all synonyms from backend storage');
    } catch (err) {
        console.error(err);
    }
};
