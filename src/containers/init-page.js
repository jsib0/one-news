import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadInitPage } from '../actions/index';
import { Col } from 'react-bootstrap';


class InitPage extends Component {
	constructor(props) {
		super(props);

		this.state = { initNews: ''};
	}

	componentDidMount() {
		this.props.loadInitPage()
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
					
				</div>
			</div>

		
	   )
	}


	render () {
		console.log("INIT-PAGE_COMP",this.props.homeNews)
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