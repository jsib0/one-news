import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadInitPage } from '../actions/index';
import { Col } from 'react-bootstrap';
import TopTrend from '../components/top-trend';
import PoliticsTrend from '../components/politics-trend';
import { Link } from 'react-router-dom';




class InitPage extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.loadInitPage();
	}

	homePage(event){
		
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
				<div className="news-name">Top Headlines: {main.source.name}</div>
				<div className="main-story">
					{newslist}
				</div>
				<div className="news-list">
					<div className="news-list-navbar">
						<img src={require('../image/politics.png')} alt=""/>
						<img src={require('../image/top-trends.png')} alt=""/>
						<img src="" alt=""/>
						<img src="" alt=""/>
					</div>
				</div>
			</div>

		
	   )
	}


	render () {
		return (
			<div className="home-page">
				{this.props.homeNews.map(this.homePage)}
			</div>
	  )
	}

}

function mapStateToProps(state) {
	return { homeNews: state.homeNews };
}

export default connect(mapStateToProps, { loadInitPage }) (InitPage);