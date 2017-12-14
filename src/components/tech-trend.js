import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTechTrend } from '../actions';


class TechTrend extends Component {

	componentDidMount() {
		this.props.fetchTechTrend();
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
		const { techTrends } = this.props

		if (techTrends.length < 1) {
			return <div>Loading...</div>;
		}

		if (techTrends.length >= 1) {
			let newTrend = techTrends.slice(0,1);

			return (
			<div>
				{newTrend.map(this.trends)}
			</div>
		  )
		}
	}
}


function mapStateToProps(state) {
	return { techTrends: state.techTrends }
}


export default connect(mapStateToProps, { fetchTechTrend })(TechTrend)