import React, { Component } from 'react';


class NavVar extends Component {

	constructor(props) {
		super(props);

		this.state = { showNav: false }; 
	}

	render() {
		return (
			<div className="search-bar">
				<div className="button"  onClick={() => this.setState({showNav: true})}>
			 	 <a href="#"><span className="right"></span></a>
			 	</div>
   		    </div>

			
		)
	}

	
}

export default NavVar;