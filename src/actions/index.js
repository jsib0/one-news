import axios from 'axios';


const API_KEY = 'c28d0feed4f94706b18771da0a1cf8db';
const ROOT_URL = `https://newsapi.org/v1/sources?language=en`
const HOME_URL = 'https://newsapi.org/v1/sources?language=en?country=us';

export const FETCH_NEWS = 'FETCH_NEWS';


export function fetchNews() {
	const url = `${ROOT_URL}`;
	const request = axios.get(url);
	console.log("url", url)
	return {
		type: FETCH_NEWS,
		payload: request
	}
}