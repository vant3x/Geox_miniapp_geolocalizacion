"use strict";

var nombre = "Alejandro";

google.maps.event.addDomListener(window, "load", function () {
    // Geolocation => Navigator
    var user_location = new UserLocation(function () {
        var mapOptions = {
            zoom: 6,
            center: {
                lat: user_location.latitude,
                lng: user_location.longitude
            }
        };
        var mapa_element = document.getElementById('map');
        var map = new google.maps.Map(mapa_element, mapOptions);
    });
});
