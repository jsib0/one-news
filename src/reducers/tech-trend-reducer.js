import {  TECH_TRENDS } from '../actions/index.js';

export default function(state=[], action) {
	console.log("TECH REDUCER", action)
	switch (action.type) {
		case TECH_TRENDS:
			return [action.payload.data, ... state];
	}

	return state;
}