import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchNews } from '../actions/index.js';



class CallNews extends Component {
	constructor(props){
		super(props);

		this.state = { term: '' };

		
	}

	componentDidMount() {
		this.props.fetchNews();
	}


	render () {
	  return  (
	  	<div>
	  		{this.componentDidMount()}
		</div>
	  );
   }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(CallNews)