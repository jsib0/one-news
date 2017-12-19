import {  SPORTS_TRENDS } from '../actions/index.js';

export default function(state=[], action) {
	switch (action.type) {
		case SPORTS_TRENDS:
			return [action.payload.data, ... state];
	}

	return state;
}