import React from 'react';
import Track from './Track';

export default class Tracks extends React.Component {
	render () {
		const tracks = this.props.tracks;
		const TrackComponents = tracks.map((track) => {
			return <Track key={track.getID()} trackData={track}/>;
		});

		return (
			<div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12 tracksContainer">
					{TrackComponents}
				</div>
			</div>
		);
	}
}
