const prod = {
    url: {
        API_URL: '',
    }
};
const dev = {
    url: {
        API_URL: 'http://127.0.0.1:8000'
    },
    headers: {
        'Content-type': 'application/json'
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;