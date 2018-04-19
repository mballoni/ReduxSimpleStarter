import axios from 'axios';

const API_KEY = '557458559258efa3685f5dca5bfa8f60';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROUTE_URL}&q=${city},br`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}