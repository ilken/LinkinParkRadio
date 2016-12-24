import React from 'react';
import Tracks from './Tracks';
import MoreButton from './MoreButton';
import LoadingScreen from './LoadingScreen';
import Store from '../stores/Store';
import * as Actions from '../actions/Actions';

export default class Radio extends React.Component {
	constructor () {
		super();
		this.state = {
			tracks: [],
			numberOfTracks: 5,
			isLoading: true
		};
	}

	componentWillMount () {
		Store.on('Update', () => {
			this.setState({
				tracks: Store.getTracks(),
				numberOfTracks: Store.getTopTracksButtonValue(),
				isLoading: false
			});
		});

		$.ajax({
		    type: "GET",
		    url: "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks",
			data: "country=GB",
		    success: (response) => {
		        Actions.update(response);
		    },
		    error: (XMLHttpRequest, textStatus, errorThrown) => {
		        console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
		    }
		});
	}

	render () {
		if (this.state.isLoading)
			return (<LoadingScreen/>);
		else
			return (
				<div className="container">
					<Tracks tracks={this.state.tracks}/>
					<MoreButton numberOfTracks={this.state.numberOfTracks}/>
				</div>
			);
	}
}
