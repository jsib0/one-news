import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectedNews } from '../actions';
import _ from 'lodash';

class SelectedNews extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchSelectedNews(id);
	}



	selectedNews(event) {
			let main = event.articles[0];
			let newslist = event.articles.map( (head) => 
				
					<div key={head.url} className="newslist-title" >
						<a href={head.url} target="_blank"><img src={head.urlToImage} alt=""/>
						<h4>{head.title}</h4>
						<p>{head.description}</p>
						</a>
					</div>
				)

			return (
			<div key={main.source.name} className="main-block">
				<div className="news-name">Source: {main.source.name}</div>
				<div className="main-story">
					{newslist}
				</div>
				<div className="news-list">
				</div>
			</div>

		
	   )
	}

	render() {
		console.log("SELECTED_NEWS_COMP",this.props.news)
		return (
			<div className="home-page">
				{this.props.news.map(this.selectedNews)}
			</div>

		)
	}


}


function mapStateToProps(state) {
	return { news: state.selectedNews }
}

export default connect(mapStateToProps, { fetchSelectedNews }) (SelectedNews)