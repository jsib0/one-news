import {  SPORTS_TRENDS } from '../actions/index.js';

export default function(state=[], action) {
	console.log("SPORTS REDUCER", action)
	switch (action.type) {
		case SPORTS_TRENDS:
			return [action.payload.data, ... state];
	}

	return state;
}