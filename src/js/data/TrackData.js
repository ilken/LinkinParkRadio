export default class TrackData{
    constructor(data){
        this.data = data;
    }

    getID(){
        return this.data.id;
    }

    getName(){
        return this.data.name;
    }

    getAlbumName(){
        return this.data.album.name;
    }

    getAlbumImage(){
        return this.data.album.images[2].url;
    }

    getPreviewUrl(){
        return this.data.preview_url;
    }

    getExternalUrl(){
        return this.data.external_urls.spotify;
    }
}
