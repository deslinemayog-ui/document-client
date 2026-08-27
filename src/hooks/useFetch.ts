import axios from 'axios';

export const BASE_URL = 'https://documents-production-5e84.up.railway.app/api';
//export const BASE_URL = 'http://192.168.1.100:1337/api';
type FetchDataTypes = {endPoint: string; method: 'POST' | 'GET' | 'UPDATE' | 'DELETE'; data?: any;};

const useFetch = () => {

    const fetchData = async ({ endPoint, method, data }: FetchDataTypes) => {
        try {
            const url = BASE_URL + endPoint;
            const headers: any = {
                'Content-Type': 'application/json',
                'Accept': 'application/zip,application/json',
            };
            let response = await axios({method, url, data, headers, timeout: 1800000});
            return response.data;
        } catch (error: any) {
            const payload = error?.response?.data;
            if (payload) {
                return payload;
            }
            console.error('Error fetching data:', error);
            return {
                status: 0,
                message: error?.message || 'Request failed',
                data: null
            };
        }
    }

    return { fetchData };
};

export default useFetch;
