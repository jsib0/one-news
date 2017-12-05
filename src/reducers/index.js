import { combineReducers } from 'redux';
import NewsReducer from './news-reducer';
import SingleNews from './single-news-reducer';
import InitNews from './init-page-reducer';


const rootReducer = combineReducers({
	news: NewsReducer,
	channel: SingleNews,
	homeNews: InitNews
});


export default rootReducer;