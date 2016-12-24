import React from 'react';
import Track from './Track';

export default class Tracks extends React.Component {
	constructor(){
		super();
		this.state = {
			image: 'https://i.scdn.co/image/441d13790c1da86b7f869ff42ef7828faa8d3f87'
		};
	}

	render () {
		const tracks = this.props.tracks;
		const TrackComponents = tracks.map((track) => {
			return <Track key={track.getID()} trackData={track}/>;
		});

		return (
			<div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12 imageContainer">
					<img src={this.state.image} className="img-responsive groupImage" alt="Linkin Park"/>
					<h2 className="text-center"> LINKIN PARK </h2>
				</div>
				<div className="col-md-12 col-sm-12 col-xs-12 tracksContainer">
					{TrackComponents}
				</div>
			</div>
		);
	}
}
