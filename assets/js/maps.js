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
        // Relevant cities found using sites found via google i.e. https://www.latlong.net/place/seville-center-of-interpretation-seville-spain-23323.html
        // London England
        {
            lat: 51.507359,
            lng: -0.136439
        },
        // Saint Petersburg, Russia
        {
            lat: 59.9311,
            lng: 30.3609
        },
        // Baku, Azerbaijan
        {
            lat: 40.4093,
            lng: 49.8671
        },
        // Munich, Germany
        {
            lat: 48.1351,
            lng: 11.5820
        },
        // Rome, Italy
        {
            lat: 41.9028,
            lng: 12.4964
        },
        // Amsterdam, Netherlands
        {
            lat: 52.3676,
            lng: 4.9041
        },
        // Bucharest, Romania
        {
            lat: 44.4268,
            lng: 26.1025
        },
        // Budapest, Hungary
        {
            lat: 47.4979,
            lng: 19.0402
        },
        // Copenhagen, Denmark
        {
            lat: 55.6761,
            lng: 12.5683
        },
        // Glasgow, Scotland:
        {
            lat: 55.858700,
            lng: -4.251433
        },
        // Seville, Spain
        {
            lat: 37.386276,
            lng: -5.988988
        },
    ];

    // alphabetical labels used with google markers 
    var markers = hosts.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // marker and cluster images added to pinpoint each city
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

// Source of code and API key sourced from GoogleMap Platform 