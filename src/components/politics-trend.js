import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPoliticsTrend } from '../actions';


class PoliticsTrend extends Component {

	componentDidMount() {
		this.props.fetchPoliticsTrend();
	}

	trends(event){
			let newEvents = event.posts.slice(0,7);
			let trend_results = newEvents.map( (results) => 
				<li className="top-trends-list" >
					<a href={results.url} target="_blank">{results.title}</a>
				</li>
			)

		return (
			<ul>
			 	{trend_results}
			</ul>
		)
	}


	render() {

		const { politicsTrends } = this.props

		if (politicsTrends.length < 1) {
			return <div className="loading" >Fetching API...</div>;
		}

		if (politicsTrends.length >= 1 ) {
			let newTrends = politicsTrends.slice(0,1)
		return (
			<div>
				{newTrends.map(this.trends)}
			</div>
		)
	  }
	}
	
}






function mapStateToProps(state){
		return { politicsTrends: state.politicsTrends }
}



export default connect(mapStateToProps, { fetchPoliticsTrend }) (PoliticsTrend)