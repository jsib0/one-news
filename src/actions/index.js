import axios from 'axios';


const API_KEY = 'c28d0feed4f94706b18771da0a1cf8db';
const ROOT_URL = `https://newsapi.org/v1/sources?language=en`
const HOME_URL = `https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=${API_KEY}`;

export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_NEWS = 'FETCH_NEWS';
export const INIT_PAGE = 'INIT_PAGE';


export function loadInitPage() {
	const url = HOME_URL
	const request = axios.get(url)

	console.log("we are getting it:::::::")

	return {
		type: INIT_PAGE,
		payload: request
	}
}

export function fetchNews() {
	const url = `${ROOT_URL}`;
	const request = axios.get(url);

	return {
		type: FETCH_NEWS,
		payload: request
	}
}

export function fetchCompany(id) {

	const newsID = id
	console.log("ID in fetchCompany",newsID)
	const request = axios.get(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${API_KEY}`);
	
	return {
		type: FETCH_COMPANY,
		payload: request
	}
}

