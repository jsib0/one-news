import { FETCH_NEWS, FETCH_COMPANY, SELECTED_NEWS } from '../actions/index.js';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_NEWS:
			return [action.payload.data, ... state];
	}

	return state;
}