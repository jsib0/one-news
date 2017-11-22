import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, PageHeader, Nav, NavItem, Col } from 'React-Bootstrap';


class NavbarComponent extends Component {
	

	render () {
		return (
			  <Navbar>
			  	<Navbar.Header>
			  		<a href="http://localhost:8080/"><img className="ega-logo" src="../../images/ega.png" /></a>
			  	<Navbar.Toggle   className="navbar-toggle"/ >
			  	</Navbar.Header>
				  <Navbar.Collapse> 
					   <Col mdOffset={2} md={8}>
					  	<Nav>     
						  	<NavItem eventKey={1}>Business</NavItem>
						  	<NavItem eventKey={2}>Entertainment</NavItem>
							<NavItem eventKey={3}>Sports</NavItem>
						  	<NavItem eventKey={4}>Gaming</NavItem>
						  	<NavItem eventKey={5}>Tech</NavItem>
						  	<NavItem eventKey={6}>Politics</NavItem>
						  	<NavItem eventKey={7}>Science</NavItem>
					  	</Nav>
					  </Col>
				  </Navbar.Collapse>
			  </Navbar>
	    )
	}
}



export default NavbarComponent;