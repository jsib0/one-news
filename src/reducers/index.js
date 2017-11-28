import { combineReducers } from 'redux';
import NewsReducer from './news-reducer';
import SingleNews from './single-news-reducer';


const rootReducer = combineReducers({
	news: NewsReducer,
	channel: SingleNews
});


export default rootReducer;