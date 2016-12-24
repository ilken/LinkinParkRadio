import React from 'react';

export default class LoadingScreen extends React.Component {
	constructor(){
		super();
		this.state = {
			loadingImage: 'https://i.scdn.co/image/441d13790c1da86b7f869ff42ef7828faa8d3f87'
		};
	}
	render () {
		return (
			<div className="row loadingScreen">
				<img src={this.state.loadingImage} className="img-responsive loadingImage" alt="Linkin Park"/>
				<h2 className="text-center"> Loading... </h2>
			</div>
		);
	}
}
