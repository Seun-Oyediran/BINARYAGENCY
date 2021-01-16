mapboxgl.accessToken = 'pk.eyJ1Ijoic2V1bjIyNTE3IiwiYSI6ImNranFyOWE2NDBsNGoydWp4ZDBhcXZ2ZjIifQ.5K_UcigNohlI-1415JCm9w';


navigator.geolocation.getCurrentPosition(getLocation, errorLocation, {enableHighAccuracy: true})

function getLocation(coords){
    const long = coords.coords.longitude
    const lat = coords.coords.latitude
    setMap([long, lat])
}

function errorLocation(){
    setMap([0, 0])
}





 function setMap(coords){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: coords, // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
   
    var marker = new mapboxgl.Marker({
        color: 'coral',
    })
    .setLngLat(coords)
    .setPopup(new mapboxgl.Popup().setHTML("<h3>You</h3>"))
    .addTo(map);

    var marker2 = new mapboxgl.Marker({
        color: '#008cba'
    })
    .setLngLat([3.6319, 6.8322])
    .setPopup(new mapboxgl.Popup().setHTML("<h3>Binary Agency</h3>"))
    .addTo(map);


        var nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-right');
}