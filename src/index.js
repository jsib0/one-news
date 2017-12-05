import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import SideNavigation from './containers/side-nav';
import CallNews from './containers/call-news';
import Favicon from 'react-favicon';
import NewsCurrent from './containers/news-current';
import InitPage from './containers/init-page';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
 	render () {
 		return ( 		
 		 <div>
 		 	<Favicon url="http://localhost:8080/favicon.png?v=2" />
 			<SideNavigation />
 			<CallNews />
 			<NewsCurrent />
 			<InitPage />
 		 </div>
 	  )
   };
}



ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
</Provider>, 
document.querySelector('.container'));