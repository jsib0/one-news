import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import { fetchNews } from '../../actions/index';
import { bindActionCreators } from 'redux';


class SideNavigation extends Component {
	constructor(props){
		super(props);

		this.state = { showNav: false };
      
	}
	
	listNews(listNews) {
		const list = listNews.sources.map( (list) => {
			let buffer = [];
			buffer.push(list.name)
			return <li>{buffer}</li>
		})
		
		return (
			<li>
				{list}
			</li>
		)
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
				items={[
					<ul>
						<a>{this.props.news.map(this.listNews)}</a>
			   		</ul>
			      ]}
        	   />
        	  <div><ul>{this.props.news.map(this.listNews)}</ul></div>
    		</div>
		)
	}


}




function mapStateToProps(state) {
	return { news: state.news };
}

export default connect(mapStateToProps)(SideNavigation);



