import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import TrackData from '../data/TrackData';
import StationData from '../data/StationData';

class Store extends EventEmitter {
	constructor () {
		super();
		this.tracks = [];
		this.displayLimit = 5;
	}

	updateData (response) {
		this.tracks = [];
		this.createTrackData(response.tracks);
		this.emit('Update');
	}

	createTrackData(tracks){
		for(let track of tracks){
			this.tracks.push(new TrackData(track));
		}
	}

	getTracks () {
		let _tracks = this.tracks.slice(0, this.displayLimit);

		return _tracks;
	}

	updateDisplayLimit () {
		this.displayLimit = this.displayLimit === 5 ? 10 : 5;
		this.emit('Update');
	}

	getTopTracksButtonValue(){
		return this.displayLimit === 10 ? 5 : 10;
	}

	switchStation(stationID){
		StationData.getInstance().switchStation(stationID);
	}

	handleActions (action) {
		switch (action.type) {
			case 'UPDATE_TRACKS':{
				this.updateData(action.data);
				break;
			}
			case 'TOP_TRACKS_BUTTON':{
				this.updateDisplayLimit();
				break;
			}
			case 'SWITCH_STATION':{
				this.switchStation(action.stationID);
				break;
			}
		}
	}
}

const store = new Store();
dispatcher.register(store.handleActions.bind(store));

export default store;
