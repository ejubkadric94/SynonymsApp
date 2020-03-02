export const executeRequest = async (url, method, data = {}) => {
    let body = undefined;
    if (method === 'POST') {
        body = JSON.stringify(data);
    }

    return await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body,
    });
};