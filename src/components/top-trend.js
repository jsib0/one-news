import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTrend } from '../actions';

class TopTrend extends Component {

	componentDidMount() {
		this.props.fetchTopTrend()
	}

	trends(event) {
		let newEvent = event.posts.slice(0,7);
		let trendz_results = newEvent.map( (result) => 
			<li className="top-trends-list">
			<a  href={result.url} target="_blank">{result.title}</a>
			</li>
		 ) 
		
		 return (
			<ul>
				{trendz_results}
			</ul>
		 ) 
	}


	render() {
		const { topTrends } = this.props

		if (topTrends.length < 1) {
			return <div>Loading Trending News...</div>;
		}

		if (topTrends.length >= 1) {
			let newTrend = topTrends.slice(0,1);

			return (
			<div className="hellodolly">
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