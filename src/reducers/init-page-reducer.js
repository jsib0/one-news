import {  INIT_PAGE } from '../actions/index.js';

export default function(state=[], action) {

	console.log("INIT_PAGE", action)
	switch (action.type) {
		case INIT_PAGE:
			return [action.payload.data, ... state];
	}

	return state;
}