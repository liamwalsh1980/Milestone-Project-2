function initMap() {
    var map = new google.maps.Map(document.getElementById("map2020"), {
        zoom: 3,
        center: {
            lat: 55.5260,
            lng: 18.2551
        }
    });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hosts = [
        {lat: 51.507359, lng: -0.136439},
        {lat: 59.9311, lng: 30.3609},
        {lat: 40.4093, lng: 49.8671},
        {lat: 48.1351, lng: 11.5820},
        {lat: 41.9028, lng: 12.4964},
        {lat: 52.3676, lng: 4.9041},
        {lat: 44.4268, lng: 26.1025},
        {lat: 47.4979, lng: 19.0402},
        {lat: 55.6761, lng: 12.5683},
        {lat: 55.858700, lng: -4.251433},
        {lat: 37.386276, lng: -5.988988},
    ];

    var markers = hosts.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
}

