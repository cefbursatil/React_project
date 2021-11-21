import axios from 'axios'
import localForage from 'localforage';
import { setupCache } from 'axios-cache-adapter';

//made the api cache data for a determine time.
const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    store: localForage,
    exclude: {
        query: false
    }
});

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query',
    adapter: cache.adapter
})

export const getDailyChartForSymbol = (symbol) => {
    return axiosInstance.get('',{
        params:{
            function:"TIME_SERIES_DAILY",
            symbol,
            apikey: "WFM3NKEN2H3051QM"
        }
    })
};