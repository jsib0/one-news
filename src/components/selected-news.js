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
      		sports: false,
      		images: [require('../image/top-trends.png'), require( '../image/top-trends-grey.png' ),require( '../image/politics.png' ), require( '../image/politics-grey.png'), require( '../image/tech.png' ), require( '../image/tech-grey.png'), require( '../image/sports.png'), require( '../image/sports-grey.png' )],
      		tre_img: require('../image/top-trends.png'),
      		pol_img: require('../image/politics-grey.png'),
      		tech_img: require('../image/tech-grey.png' ),
      		sports_img: require('../image/sports-grey.png')
    	 }
   		
   		this.selectedNews = this.selectedNews.bind(this);
	}

	componentDidMount(ids) {
		const { id } = this.props.match.params;
		this.props.fetchSelectedNews(id);
	}

	componentWillReceiveProps(nextProps) {
		const { id } = nextProps.match.params;

	    if(nextProps.news.length > 1) {
			nextProps.news.pop();
		}

		if(nextProps.match.params.id !== this.props.match.params.id){
			nextProps.fetchSelectedNews(id)
		}	
	}

	


	selectedNews(event) {

			let image = this.state.images;
			let main = event.articles[0];
			let newslist = event.articles.map( (head) => 
					<div key={head.title} className="newslist-title" >
						<a href={head.title} target="_blank">
							<div className="newslist-image" ><img src={head.urlToImage} alt=""/></div>
							<div className="newslist-header"><h4>{head.title}</h4></div>
							<div className="newslist-p-tag"><p>{head.description}</p></div>
						</a>
					</div>
				)
			
			return (
				<div key={newslist.id} className="main-container">
					<Navbar bsStyle="nav-bar">
						<Navbar.Header>
			     	  		<Navbar.Brand>
			     	 			<SideNavigation />
				  			</Navbar.Brand>
						</Navbar.Header>
						<Nav>
							<NavItem className="hello">
								<Link to={"/"} className="logo" ><p>One</p><h4>News</h4></Link>
							</NavItem>
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