import {  FETCH_COMPANY } from '../actions/index.js';

export default function(state=[], action) {
	console.log("FETCH_COMPANY REDUCER", action)


	switch (action.type) {
		case FETCH_COMPANY:
			return [action.payload.data, ... state];
	}

	return state;
}