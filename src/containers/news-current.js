import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class NewsCurrent extends Component {
	constructor() {
		super();

		this.state = {
		  modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.newsTitle = this.newsTitle.bind(this);
	}

	openModal() {
	this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
	// references are now sync'd and can be accessed.
	this.subtitle.style.color = '#f00';
	}

	closeModal() {
	this.setState({modalIsOpen: false});
	}

	currentNews(event) {
		console.log("News Current",event)
	}


	newsTitle(news) {
		return ( news.articles.map((newsart) => 

			<div>
				<a  onClick={() => {this.openModal()} }><h3 className="news-title" >{newsart.title}</h3> </a>
			</div>) )
	}
	

	render() {
		
		return(
			<div className="news-body">
				{this.props.channel.map(this.newsTitle)}

		        <Modal
		          isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={customStyles}
		          contentLabel="Example Modal"
		        >
		 
		          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
		          <button onClick={this.closeModal}>close</button>
		          <div>I am a modal</div>
		          <form>
		            <input />
		            <button>tab navigation</button>
		            <button>stays</button>
		            <button>inside</button>
		            <button>the modal</button>
		          </form>
		        </Modal>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { channel: state.channel };
}

export default connect(mapStateToProps)(NewsCurrent);