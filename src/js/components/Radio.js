import React from 'react';
import Tracks from './Tracks';
import MoreButton from './MoreButton';
import LoadingScreen from './LoadingScreen';
import SwitchStation from './SwitchStation';
import StationData from '../data/StationData';
import Store from '../stores/Store';

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

		StationData.getInstance().requestStationData();
	}

	render () {
		if (this.state.isLoading)
			return (<LoadingScreen/>);
		else
			return (
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12 imageContainer">
							<img src={StationData.getInstance().getStationImage()} className="img-responsive groupImage" alt="Linkin Park"/>
							<h2 className="text-center"> {StationData.getInstance().getStationName()} </h2>
						</div>
					</div>
					<Tracks tracks={this.state.tracks}/>
					<MoreButton numberOfTracks={this.state.numberOfTracks}/>
					<SwitchStation/>
				</div>
			);
	}
}
