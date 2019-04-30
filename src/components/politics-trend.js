import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPoliticsTrend } from '../actions';


class PoliticsTrend extends Component {

	componentDidMount() {
		this.props.fetchPoliticsTrend();
	}

	trends(event){
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

		const { politicsTrends } = this.props

		if (politicsTrends.length < 1) {
			return <div className="loading" >Fetchin API...</div>;
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