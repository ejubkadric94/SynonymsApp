const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getSearchSynonymsUrl = word => `${backendUrl}/synonyms/${word}`;
export const getAddSynonymsUrl = () => `${backendUrl}/synonyms`;
