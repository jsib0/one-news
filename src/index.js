import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideNavigation from './containers/side-nav';
import Favicon from 'react-favicon';
import InitPage from './containers/init-page';
import SelectedNews from './components/selected-news';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { news: [] }
	}

 	render () {
 		return (
 		<BrowserRouter>	
 			<div>
 			
 				<SideNavigation />
 				<Favicon url="http://localhost:8080/favicon.png?v=2" />
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