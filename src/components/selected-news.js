import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectedNews } from '../actions';
import TopTrend from './top-trend';
import PoliticsTrend from './politics-trend';
import TechTrend from './tech-trend';
import SportsTrend from './sports-trend';
import SideNavigation from '../containers/side-nav';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class SelectedNews extends Component {
	constructor(props) {
		super(props);

		 this.state = {
		 	trending: true,
      		politics: false,
      		tech: false,
      		sports: false
    	 }
   		
   		this.selectedNews = this.selectedNews.bind(this);
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
				<div className="main-container">
			 <Navbar bsStyle="nav-bar">
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
				<div className="news-name">{main.source.name}</div>
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