import { combineReducers } from 'redux';
import NewsReducer from './news-reducer';
import SingleNews from './single-news-reducer';
import InitNews from './init-page-reducer';
import SelectedNews from './selected-news';


const rootReducer = combineReducers({
	news: NewsReducer,
	channel: SingleNews,
	homeNews: InitNews,
	selectedNews: SelectedNews
});


export default rootReducer;