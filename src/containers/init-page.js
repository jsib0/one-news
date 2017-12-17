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
		 	trending: 1,
      		politics: 0,
      		tech: 0,
      		sports: 0,
      		showNav: 0,
      		images: [require('../image/top-trends.png'), require( '../image/top-trends-grey.png' ),require( '../image/politics.png' ), require( '../image/politics-grey.png'), require( '../image/tech.png' ), require( '../image/tech-grey.png'), require( '../image/sports.png'), require( '../image/sports-grey.png' )],
      		tre_img: require('../image/top-trends.png'),
      		pol_img: require('../image/politics-grey.png'),
      		tech_img: require('../image/tech-grey.png' ),
      		sports_img: require('../image/sports-grey.png')
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
			
		let image = this.state.images;
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
							<a onClick={() => this.setState({ trending: 1, politics: 0, tech: 0, sports: 0,  tre_img: image[0], pol_img: image[3], tech_img: image[5], sports_img:  image[7] }) } ><img  src={this.state.tre_img} alt="top-trends"/>
							<span className="hello">Trends</span></a>
							<a onClick={() => this.setState({ politics: 1, trending: 0, tech: 0, sports: 0, pol_img: image[2], tre_img: image[1], tech_img: image[5], sports_img:  image[7] }) } ><img src={this.state.pol_img} alt="politics"/>
							<span>Politics</span></a>
							<a onClick={() => this.setState({ tech: 1, trending: 0, politics: 0, sports: 0, tech_img: image[4], pol_img: image[3], tre_img: image[1], sports_img:  image[7] }) }><img src={this.state.tech_img} alt="tech"/>
							<span>Tech</span></a>
							<a onClick={() => this.setState({ sports: 1, trending: 0, politics: 0, tech: 0, sports_img:  image[6],  pol_img: image[3], tech_img: image[5], tre_img: image[1] }) }><img src={this.state.sports_img} alt="sports"/>
							<span>Sports</span></a>
						</div>
					</div>
					<div>
					
					  { this.state.trending ? <TopTrend /> : null }
					  { this.state.politics ? <PoliticsTrend /> : null }
					  { this.state.tech ? <TechTrend /> : null }
					  { this.state.sports ?  <SportsTrend />: null }
					</div>
				</div>
			</div>
	</div>
		
	   )
	}


	render () {
		const { homeNews } = this.props

		

		if (homeNews.length >= 1 ) {
			let home_news = homeNews.slice(0,1)
		return (
			<div className="home-page">
				{home_news.map(this.homePage)}
			</div>
			)
		}

		else {
		return (
			<div className="home-page">
				{this.props.homeNews.map(this.homePage)}
			</div>
	  		)
		}
	}

}

function mapStateToProps(state) {
	return { homeNews: state.homeNews };
}

export default connect(mapStateToProps, { loadInitPage }) (InitPage);