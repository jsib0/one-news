import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportsTrend } from '../actions';


class SportsTrend extends Component {

	componentDidMount() {
		this.props.fetchSportsTrend();
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
		const { sportsTrends } = this.props

		if (sportsTrends.length < 1) {
			return <div className="loading">Fetching API...</div>;
		}

		if (sportsTrends.length >= 1) {
			let newTrend = sportsTrends.slice(0,1);

			return (
			<div>
				{newTrend.map(this.trends)}
			</div>
		  )
		}
	}
}


function mapStateToProps(state) {
	return { sportsTrends: state.sportsTrends }
}

export default connect(mapStateToProps, { fetchSportsTrend })(SportsTrend)