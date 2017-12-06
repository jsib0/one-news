import axios from 'axios';


const API_KEY = 'c28d0feed4f94706b18771da0a1cf8db';
const ROOT_URL = `https://newsapi.org/v1/sources?language=en`
const HOME_URL = `https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=${API_KEY}`;
const TOP_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&sort=social.facebook.likes&q=language%3Aenglish%20thread.country%3AUS%20performance_score%3A%3E9%20domain_rank%3A%3C1000"
const POLITICS_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&sort=social.facebook.likes&q=language%3Aenglish%20thread.country%3AUS%20performance_score%3A%3E9%20domain_rank%3A%3C900%20site_category%3Apolitics"
const TECH_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&ts=1512112164892&sort=social.linkedin.shares&q=language%3Aenglish%20thread.country%3AUS%20site_category%3Atech%20thread.section_title%3Atech"
const SPORTS_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&ts=1512112673346&sort=relevancy&q=language%3Aenglish%20thread.country%3AUS%20site_category%3Asports%20performance_score%3A%3E7"


export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_NEWS = 'FETCH_NEWS';
export const INIT_PAGE = 'INIT_PAGE';


export function loadInitPage() {
	const url = HOME_URL
	const request = axios.get(url)

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
	const request = axios.get(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${API_KEY}`);
	
	return {
		type: FETCH_COMPANY,
		payload: request
	}
}

