import _ from 'lodash';
import { FETCH_NEWS, FETCH_COMPANY } from '../actions/index.js';


export default function(state = [], action) {

	console.log('FETCH_NEWS', action)

	switch (action.type) {
		case FETCH_NEWS:
			return [action.payload.data, ... state];

	}

	return state;
}