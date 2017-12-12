import {  TOP_TRENDS } from '../actions/index.js';

export default function(state=[], action) {
	console.log("TREND REDUCER", action)
	switch (action.type) {
		case TOP_TRENDS:
			return [action.payload.data, ... state];
	}

	return state;
}