import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPoliticsTrend } from '../actions';


class PoliticsTrend extends Component {

	componentDidMount() {
		this.props.fetchPoliticsTrend();
	}


	render() {
		return (
			<div>HELLO</div>
		)
	}
}


function mapStateToProps(state) {
	return { politicsTrends: state.politicsTrends }
}


export default connect(mapStateToProps, { fetchPoliticsTrend })(PoliticsTrend)