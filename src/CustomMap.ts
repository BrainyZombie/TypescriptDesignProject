export interface Markable{
    location:{
        lat: number;
        lng: number;
    };
    markerContent():string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }   
        });
    }

    addMarker(to_mark: Markable){
        const popup = new google.maps.InfoWindow({
            content: to_mark.markerContent()
        });
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: to_mark.location
        });
        marker.addListener("click", () => {
            popup.open(this.googleMap, marker);
        });
    }
}