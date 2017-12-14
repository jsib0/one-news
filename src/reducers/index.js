import { combineReducers } from 'redux';
import NewsReducer from './news-reducer';
import SingleNews from './single-news-reducer';
import InitNews from './init-page-reducer';
import SelectedNews from './selected-news-reducer';
import TopTrends from './top-trend-reducer'
import PoliticsTrends from './politics-trend-reducer';
import TechTrends from './tech-trend-reducer';
import SportsTrends from './sports-trend-reducer';


const rootReducer = combineReducers({
	news: NewsReducer,
	channel: SingleNews,
	homeNews: InitNews,
	selectedNews: SelectedNews,
	topTrends: TopTrends,
	politicsTrends: PoliticsTrends,
	techTrends: TechTrends,
	sportsTrends: SportsTrends
});


export default rootReducer;