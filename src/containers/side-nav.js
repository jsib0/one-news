import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import { fetchNews, fetchCompany } from '../actions/index';
import { Link } from 'react-router-dom';


class SideNavigation extends Component {
	constructor(props){
		super(props);

		this.state = { showNav: false, term: '' };

  		this.listNews = this.listNews.bind(this);
	}

	componentDidMount() {
		this.props.fetchNews();
	}

	
	
	listNews(listNews) {

		let listStyle = {
			display: 'block',
			left: '0',
			textDecoration: 'none'
		}

		return ( listNews.sources.map((news) => 
			<Link className="sidenav-list" key={news.id}  onClick={() => this.setState({showNav: false})} style={listStyle} to={`/${news.id}`}>{news.name}</Link>
		  )
		)
	}

	
	render () {
		let title = (
			<div>
				<a className="side-nav-logo"><p >One</p><h4>News</h4></a>
			</div>
		)
		
		return (
			<div>
   			  <div className="col" onClick={() => this.setState({showNav: true})}>
   				 <div className="con">
      			 	<div className="bar arrow-top"></div>
      		     	<div className="bar arrow-middle"></div>
      				<div className="bar arrow-bottom"></div>
    		  	</div>
  			  </div>
			  <SideNav
         	  	showNav = {this.state.showNav}
        	  	onHideNav = {() => this.setState({showNav: false})} 
				items={[this.props.news.map(this.listNews)]}
				title={title}
        	   />
    		</div>
		)
	}


}




function mapStateToProps(state) {
	return { news: state.news };
}

export default connect(mapStateToProps, { fetchCompany, fetchNews }) (SideNavigation);



