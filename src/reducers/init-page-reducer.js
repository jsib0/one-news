import {  INIT_PAGE } from '../actions/index.js';

export default function(state=[], action) {
	switch (action.type) {
		case INIT_PAGE:
			return [action.payload.data, ... state];
	}

	return state;
}