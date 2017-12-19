import {  POLITICS_TRENDS } from '../actions/index.js';

export default function(state=[], action) {
	switch (action.type) {
		case POLITICS_TRENDS:
			return [action.payload.data, ... state];
	}

	return state;
}