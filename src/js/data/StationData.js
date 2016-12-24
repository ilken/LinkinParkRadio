import * as Actions from '../actions/Actions';

let instance = null;
let SINGLETON_ENFORCER = Symbol();

export default class StationData{
    constructor(enforcer){
        if (enforcer !== SINGLETON_ENFORCER){
			throw new Error("Use StationData.getInstance()");
		}

        this.stationData = {
            "6XyY86QOPPrYVGvF9ch6wz" : {
                id: "6XyY86QOPPrYVGvF9ch6wz",
                name: "LINKIN PARK",
                image: "https://i.scdn.co/image/441d13790c1da86b7f869ff42ef7828faa8d3f87"
            },
            "7rEIUw67hRTgievwuKQGSj" : {
                id: "7rEIUw67hRTgievwuKQGSj",
                name: "Manga",
                image: "https://i.scdn.co/image/4acc9117c6704523d299cc7eea99522246bfc103"
            },
            "0L8ExT028jH3ddEcZwqJJ5" : {
                id: "0L8ExT028jH3ddEcZwqJJ5",
                name: "Red Hot Chili Peppers",
                image: "https://i.scdn.co/image/5b2072e522bf3324019a8c2dc3db20116dff0b87"
            }
        }

        this.activeStation = "6XyY86QOPPrYVGvF9ch6wz";
    }

    requestStationData(){
        $.ajax({
            type: "GET",
            url: "https://api.spotify.com/v1/artists/" + this.getStationID() + "/top-tracks",
            data: "country=GB",
            success: (response) => {
                Actions.update(response);
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                console.log("Status: " + textStatus);
                console.log("Error: " + errorThrown);
            }
        });
    }

    getStationData(){
        return this.stationData[this.activeStation];
    }

    getStationID(){
        return this.stationData[this.activeStation].id;
    }

    getStationName(){
        return this.stationData[this.activeStation].name;
    }

    getStationImage(){
        return this.stationData[this.activeStation].image;
    }

    switchStation(id){
        this.activeStation = id;
        this.requestStationData();
    }

    getInactiveStations(){
        let inactiveStations = Object.assign({}, this.stationData);
        delete inactiveStations[this.activeStation];

        return inactiveStations;
    }

    static getInstance(){
		if (!instance){
			instance = new StationData(SINGLETON_ENFORCER);
		}

		return instance;
	}
}
