import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import { fetchNews, fetchCompany } from '../actions/index';


class SideNavigation extends Component {
	constructor(props){
		super(props);

		this.state = { showNav: false, term: '' };

		this.fetchNewsCompany = this.fetchNewsCompany.bind(this);
  
  		this.listNews = this.listNews.bind(this);
	}

	fetchNewsCompany(event) {
		
		this.props.fetchCompany(event);
	}

	
	
	listNews(listNews) {
		
		let listStyle = {
			display: 'block'
		}

		return listNews.sources.map((news) => <a  style={listStyle}  onClick={ () => {this.fetchNewsCompany(news.id)}} href="#" >{news.name}</a>)
	}

	
	render () {
		
		return (
			<div>
			  <div className="button"  onClick={() => this.setState({showNav: true})}>
			  <a href="#"><span className="right"></span></a>
   			  </div>
			  <SideNav
         	  	showNav = {this.state.showNav}
        	  	onHideNav = {() => this.setState({showNav: false})} 
				items={[this.props.news.map(this.listNews)]}
				title="ONE NEWS"
			   
        	   />
        	  <div></div>
    		</div>
		)
	}


}




function mapStateToProps(state) {
	return { news: state.news };
}

export default connect(mapStateToProps, { fetchCompany }) (SideNavigation);



