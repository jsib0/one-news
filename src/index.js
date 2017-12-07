import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideNavigation from './containers/side-nav';
import CallNews from './containers/call-news';
import Favicon from 'react-favicon';
import NewsCurrent from './containers/news-current';
import InitPage from './containers/init-page';
import SelectedNews from './components/selected-news';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
 	render () {
 		return (
 		<BrowserRouter>	
 			<div>
 			
 				<SideNavigation/>
 				<Favicon url="http://localhost:8080/favicon.png?v=2" />
 				<CallNews />
 				<Switch>
					<Route path="/:id" component={SelectedNews} />
					<Route path="/" component={InitPage} />		
				</Switch>
 			</div>
 		 </BrowserRouter> 
 	  )
   };
}



ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
</Provider>, 
document.querySelector('.container'));