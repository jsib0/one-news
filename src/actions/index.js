import axios from 'axios';


const API_KEY = 'c28d0feed4f94706b18771da0a1cf8db';
const ROOT_URL = `https://newsapi.org/v1/sources?language=en`
const HOME_URL = 'https://newsapi.org/v1/sources?language=en?country=us';
const COMPANY_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_NEWS = 'FETCH_NEWS';


export function fetchNews() {
	const url = `${ROOT_URL}`;
	const request = axios.get(url);

	return {
		type: FETCH_NEWS,
		payload: request
	}
}

export function fetchCompany(id) {


	const url = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_COMPANY,
		payload: request
	}
}