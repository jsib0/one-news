import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadInitPage } from '../actions/index';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopTrend from '../components/top-trend';
import PoliticsTrend from '../components/politics-trend';
import TechTrend from '../components/tech-trend';
import SportsTrend from '../components/sports-trend';
import SideNavigation from './side-nav';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';





class InitPage extends Component {
	constructor(props) {
		super(props);

		 this.state = {
		 	trending: true,
      		politics: false,
      		tech: false,
      		sports: false,
      		showNav: false
    	 }

    	 this.homePage = this.homePage.bind(this);
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
			<div>
			<Navbar>
				<Navbar.Header>
			      <Navbar.Brand>
			     	 <SideNavigation />
				  </Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem><Link to={"/"} className="logo" ><p>One</p><h4>News</h4></Link></NavItem>
				</Nav>
			</Navbar>
			<div key={main.source.name} className="main-block">
				<div className="news-name">Top Headlines: {main.source.name}</div>
				<div className="main-story">
					{newslist}
				</div>
				<div className="news-list">
					<div className="news-list-navbar">
						<div className="trending"><p>Trending</p></div>
						<div className="news-list-images">
							<img  onClick={() => this.setState({ trending: true, politics: false, tech: false, sports: false}) }  src={require( '../image/top-trends.png' )} alt="top-trends"/>
							<img  onClick={() => this.setState({ politics: true, trending: false, tech: false, sports: false }) } src={require( '../image/politics.png' )} alt="politics"/>
							<img  onClick={() => this.setState({ tech: true, trending: false, politics: false, sports: false }) } src={require( '../image/tech.png' )} alt="tech"/>
							<img  onClick={() => this.setState({ sports: true, trending: false, politics: false, tech: false }) } src={require( '../image/sports.png' )} alt="sports"/>
						</div>
					</div>
					<div>
					  { this.state.trending ? <TopTrend /> : null }
					  { this.state.politics ? <PoliticsTrend /> : null }
					  { this.state.tech ? <TechTrend /> : null }
					  { this.state.sports ? <SportsTrend /> : null }
					</div>
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