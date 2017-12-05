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
		let newslist = event.articles.filter( (first) => first !== main).map( (dick) => 
				<Col>
					<div><h1>{dick.title}</h1></div>
					<div>{dick.description}</div>
				</Col>
				)
			

		return (
			<div className="main-block">
				<div className="main-story">
					<a href={main.url}><img src={main.urlToImage} alt=""/></a>
					<a href={main.url}><h1>{main.title}</h1></a>
					<p>{main.description}</p>
				</div>
				<div className="news-list">
					{newslist}
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