import { FETCH_NEWS } from '../actions/index.js';


export default function(state = [], action) {

	console.log('Action received:', action)

	switch (action.type) {
		case FETCH_NEWS:
			return [action.payload.data, ... state]
	}

	return state;
}