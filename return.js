
// Pictures 

<li key={news.id}> 	
	{news.title}
	<img className="media-object" src={news.urlToImage} />
</li>

// for logos
	const print = newsData.sources.map( (yes, first, last)  => {
			let url = yes.url
			String.prototype.lastIndexOfEnd = function(string) {
			    var io = this.lastIndexOf(string);
			    return io == -1 ? -1 : io + string.length;
			}

			let website = url.substring(url.indexOf("http"), url.lastIndexOfEnd("com")) 
			
			console.log("URL:",website)
			return <li key={yes.id} > <img src={"//logo.clearbit.com/" +  website} /> </li>
		});

///////////////HEADLINES


const print = newsData.articles.map( news => {
			return <li key={print}> {news.title}</li>
		});


		
		return (


			<ul>
				{print}
		 	</ul>
		)

		
	}


	render () {
		return (
			<div>
					{this.props.news.map(this.renderNews)}
			</div>
		)

//////////////  search -bar



import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchNews } from '../actions/index.js';



class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: '' };

		this.onClickButton = this.onClickButton.bind(this);
	}

	onClickButton() {

		this.props.fetchNews();
		
	}


	render () {
	  return  (
	  	<div>
	  		{this.onClickButton()}
		</div>
	  );
   }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)


//////////// nav list

import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewsList extends Component {

	renderNews(newsData) {

		const print = newsData.sources.map( (yes, first, last)  => {
			let url = yes.url
			String.prototype.lastIndexOfEnd = function(string) {
    		var io = this.lastIndexOf(string);
    		return io == -1 ? -1 : io + string.length;
			}
			let home = url.match(/(com|net)/)
		
			let website = url.substring(url.indexOf("http"), url.lastIndexOfEnd("com")) 
		
			return <a href={yes.url} key={yes.id} > <img src={"//logo.clearbit.com/" +   website} /> </a>
		});
		
		return (
			<div>
				
		 	</div>
		)
	}

	render () {
		return (
			<div>
					{this.props.news.map(this.renderNews)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { news: state.news };
}


export default connect(mapStateToProps)(NewsList);