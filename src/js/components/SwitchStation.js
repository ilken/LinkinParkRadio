import React from 'react';
import Station from './Station';
import StationData from '../data/StationData';
import * as Actions from '../actions/Actions';

export default class SwitchStation extends React.Component {
	render () {
		const inactiveStations = StationData.getInstance().getInactiveStations();
		const StationComponents = Object.keys(inactiveStations).map((key) => {
			return <Station key={inactiveStations[key].id} stationData={inactiveStations[key]}/>;
		});

		return (
			<div className="row switchStationContainer">
				<div className="col-md-12 col-sm-12 col-xs-12 switchStationTitle">
					<h2> Switch Station </h2>
				</div>
				{StationComponents}
			</div>
		);
	}
}
