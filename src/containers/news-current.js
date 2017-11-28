import React, { Component } from 'react';
import { connect } from 'react-redux';



class NewsCurrent extends Component {
	conponentDidMount() {

	}

	currentNews(event) {
		console.log("News Current",event)
	}


	render() {
		
		return(
			<div>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { channel: state.channel };
}

export default connect(mapStateToProps)(NewsCurrent);