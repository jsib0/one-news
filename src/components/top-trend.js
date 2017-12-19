import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTrend } from '../actions';
import _ from 'lodash';

class TopTrend extends Component {

	componentDidMount() {
		this.props.fetchTopTrend()
	}

	trends(event) {
		let newEvent = event.posts.slice(0,7);
	
		return  _.map( newEvent, (result) => {
		
			return (
				<ul key={result.uuid} >
					<li className="top-trends-list">
						<a  href={result.url} target="_blank">{result.title}</a>
					</li>
				</ul>
			)}
		)
	}


	render() {
		const { topTrends } = this.props

		if (topTrends.length < 1) {
			return <div className="loading" >Fetching API...</div>;
		}

		if (topTrends.length >= 1) {
			let newTrend = topTrends.slice(0,1);

			return (
				<div>
					{newTrend.map(this.trends)}
				</div>
		  	)
		}
	}
}


function mapStateToProps(state) {
	return { topTrends: state.topTrends }
}

export default connect(mapStateToProps, { fetchTopTrend }) (TopTrend)