import React from 'react';
import * as Actions from '../actions/Actions';

export default class PlayButton extends React.Component {
	render () {
		return (
			<div className="playButton">
				<i className="fa fa-play-circle fa-2x" aria-hidden="true"></i>
			</div>
		);
	}
}
