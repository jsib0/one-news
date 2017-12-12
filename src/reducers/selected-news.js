import { SELECTED_NEWS } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case SELECTED_NEWS:
			return [action.payload.data, ... state];
	}

	return state;
}