import React from 'react';

export default class Track extends React.Component {
	constructor(){
		super();
		this.state = {
			showDetails: false
		}
	}
	toggleDetails(){
		this.setState({
			showDetails: !this.state.showDetails
		});

		for( let audioObject of document.querySelectorAll('audio') ){
			audioObject.pause();
		}
	}
	render () {
		const track = this.props.trackData;
		const expandRowClass = this.state.showDetails ? " active" : "";
		const expandRowIcon = this.state.showDetails ? "fa-eject" : "fa-play-circle";

		return (
			<div className="trackRow" onClick={this.toggleDetails.bind(this)}>
				<div className="row trackBaseRow">
					<div className="col-md-3 col-sm-3 col-xs-3 albumImageContainer" onClick={this.toggleDetails.bind(this)}>
						<img className="albumImage img-responsive" src={track.getAlbumImage()} alt={track.getAlbumName()}/>
					</div>
					<div className="col-md-1 col-sm-1 col-xs-1 playButtonContainer">
						<div className="playButton">
							<i className={"fa " + expandRowIcon + " fa-2x"} aria-hidden="true"></i>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-8 trackNameContainer">
						<p className="trackName">
							{track.getName()}
						</p>
					</div>
				</div>
				<div className={"row trackExpandRow" + expandRowClass}>
					<div className="col-md-12 col-sm-12 col-xs-12 previewContainer">
						<div className="row trackAlbumRow">
							<div className="col-md-3 col-sm-3 col-xs-12">
								<h4>Album: </h4>
							</div>
							<div className="col-md-9 col-sm-9 col-xs-12">
							<p className="albumName">
								{track.getAlbumName()}
							</p>
							</div>
						</div>
						<div className="row previewRow">
							<div className="col-md-3 col-sm-3 col-xs-12">
								<h4>Preview: </h4>
							</div>
							<div className="col-md-9 col-sm-9 col-xs-12">
								<audio controls>
									<source src={track.getPreviewUrl()} type="audio/mp3"/>
									<p>Your browser does not support the audio feature.</p>
								</audio>
							</div>
						</div>
						<div className="row externalUrlRow">
							<div className="col-md-3 col-sm-3 col-xs-12">
								<h4>Full Version: </h4>
							</div>
							<div className="col-md-9 col-sm-9 col-xs-12">
								<a className="externalUrlValue" href={track.getExternalUrl()} target="_blank"> External Link </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
