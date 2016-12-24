import React from 'react';
import * as Actions from '../actions/Actions';

export default class MoreButton extends React.Component {
	handleButtonClick(e){
		Actions.topTracksButtonClick();
	}

	render () {
		return (
            <div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12 text-center moreButtonContainer">
					<button type="button"
							className="btn btn-default center-block moreButton"
							onClick={this.handleButtonClick.bind(this)}
					>Get Top {this.props.numberOfTracks}</button>
				</div>
			</div>
		);
	}
}
