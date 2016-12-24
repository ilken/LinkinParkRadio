import dispatcher from '../dispatcher';

export function update (data) {
	dispatcher.dispatch({
		type: 'UPDATE_TRACKS',
		data
	});
}

export function topTracksButtonClick () {
	dispatcher.dispatch({
		type: 'TOP_TRACKS_BUTTON'
	});
}

export function switchStation (stationID) {
	dispatcher.dispatch({
		type: 'SWITCH_STATION',
		stationID,
	});
}
