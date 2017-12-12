import {  POLITICS_TRENDS } from '../actions/index.js';

export default function(state=[], action) {
	console.log("POLITICS REDUCER", action)
	switch (action.type) {
		case POLITICS_TRENDS:
			return [action.payload.data, ... state];
	}

	return state;
}