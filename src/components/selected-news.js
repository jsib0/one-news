import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectedNews } from '../actions';
import Masonry from 'react-masonry-component';

class SelectedNews extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount(ids) {
		const { id } = this.props.match.params;
		this.props.fetchSelectedNews(id);
	}

	componentWillReceiveProps(nextProps) {
		const { id } = nextProps.match.params;

		// if not current props, pop()
	    if(nextProps.news.length > 1) {
			nextProps.news.pop();
		}
		// if not initial componenetDidMount id, fetch nextProps id
		if(nextProps.match.params.id !== this.props.match.params.id){
			nextProps.fetchSelectedNews(id)
		}	
		



	}


	selectedNews(event) {

			let main = event.articles[0];
			let newslist = event.articles.map( (head) => 
					<div key={head.url} className="newslist-title" >
						<a href={head.url} target="_blank"><img src={head.urlToImage} alt=""/>
						<h4>{head.title}</h4>
							<p className="newslist-description">{head.description}</p>
						</a>
					</div>
				)

			return (
			<div key={main.source.name} className="main-block">
				<div className="news-name">Top Headlines: {main.source.name}</div>
				<div className="main-story">
					{newslist}
				</div>
				<div className="news-list">
				</div>
			</div>
	   )
	}

	render() {
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