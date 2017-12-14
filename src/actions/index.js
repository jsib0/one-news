import axios from 'axios';


const API_KEY = 'c28d0feed4f94706b18771da0a1cf8db';
const SIDE_NAV_URL = `https://newsapi.org/v1/sources?language=en`
const NEWSAPI_URL = `https://newsapi.org/v2/top-headlines`;
const TOP_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&sort=social.facebook.likes&q=language%3Aenglish%20thread.country%3AUS%20performance_score%3A%3E9%20domain_rank%3A%3C1000"
const POLITICS_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&sort=social.facebook.likes&q=language%3Aenglish%20thread.country%3AUS%20performance_score%3A%3E9%20domain_rank%3A%3C900%20site_category%3Apolitics"
const TECHIE_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&ts=1512112164892&sort=social.linkedin.shares&q=language%3Aenglish%20thread.country%3AUS%20site_category%3Atech%20thread.section_title%3Atech"
const SPORTS_TREND = "http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&ts=1512112673346&sort=relevancy&q=language%3Aenglish%20thread.country%3AUS%20site_category%3Asports%20performance_score%3A%3E7"


export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_NEWS = 'FETCH_NEWS';
export const INIT_PAGE = 'INIT_PAGE';
export const SELECTED_NEWS = 'SELECTED_NEWS';
export const TOP_TRENDS = 'TOP_TRENDS';
export const POLITICS_TRENDS ='POLITICS_TRENDS';
export const TECH_TRENDS = 'TECH_TRENDS';
export const SPORTS_TRENDS = 'SPORTS_TRENDS'


export function loadInitPage() {
	const request = axios.get(`${NEWSAPI_URL}?sources=the-economist&apiKey=${API_KEY}`)

	return {
		type: INIT_PAGE,
		payload: request
	}
}

export function fetchNews() {
	const url = `${SIDE_NAV_URL}`;
	const request = axios.get(url);

	return {
		type: FETCH_NEWS,
		payload: request
	}
}


export function fetchSelectedNews(id) {
	const request = axios.get(`${NEWSAPI_URL}?sources=${id}&apiKey=${API_KEY}`);
	
	return {
		type: SELECTED_NEWS,
		payload: request
	}
}

export function fetchTopTrend() {
	const request = axios.get("http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&sort=social.facebook.likes&q=language%3Aenglish%20thread.country%3AUS%20performance_score%3A%3E9%20domain_rank%3A%3C1000");
	return {
		type: TOP_TRENDS,
		payload: request
	}
}

export function fetchPoliticsTrend() {
	const request = axios.get("http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&sort=social.facebook.likes&q=language%3Aenglish%20thread.country%3AUS%20performance_score%3A%3E9%20domain_rank%3A%3C900%20site_category%3Apolitics")
	return {
		type: POLITICS_TRENDS,
		payload: request 
	}
}

export function fetchTechTrend() {
	const request = axios.get("http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&ts=1512112164892&sort=social.linkedin.shares&q=language%3Aenglish%20thread.country%3AUS%20site_category%3Atech%20thread.section_title%3Atech")

	return {
		type: TECH_TRENDS,
		payload: request
	}

}

export function fetchSportsTrend() {
	const request = axios.get("http://webhose.io/filterWebContent?token=58115c54-6160-454f-9b57-6bf9a4394e6b&format=json&ts=1512112673346&sort=relevancy&q=language%3Aenglish%20thread.country%3AUS%20site_category%3Asports%20performance_score%3A%3E7") 

	return {
		type: SPORTS_TRENDS,
		payload: request
	}
}



