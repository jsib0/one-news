import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import NavbarComponent from './containers/navbar';
import SideNavigation from './containers/SideNav/side-nav';
import CallNews from './containers/call-news';
import Favicon from 'react-favicon';




const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
 	render () {
 		return ( 		
 		 <div>
 		 	<Favicon url="http://localhost:8080/favicon.png?v=2" />
 		 	<NavbarComponent />
 			<SideNavigation />
 			<CallNews />
 		 </div>
 	  )
   };
}



ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
</Provider>, 
document.querySelector('.container'));