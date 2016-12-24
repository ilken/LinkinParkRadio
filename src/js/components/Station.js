import React from 'react';
import * as Actions from '../actions/Actions';
import StationData from '../data/StationData';

export default class Station extends React.Component {
	handleClick(){
		Actions.switchStation(this.props.stationData.id);
	}

	render () {
		return (
			<div className="col-md-6 col-sm-6 col-xs-6 station" onClick={this.handleClick.bind(this)}>
				<img src={this.props.stationData.image} className="img-responsive stationImage" alt={this.props.stationData.name}/>
				<h4 className="text-center"> {this.props.stationData.name} </h4>
			</div>
		);
	}
}
