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

        var search_input = document.getElementById('search-place');
        var autocomplete = new google.maps.places.Autocomplete(search_input);

        var marker = new google.maps.Marker({
            map: map
        });

        autocomplete.bindTo("bounds", map);

        google.maps.event.addListener(autocomplete, "place_changed", function () {
            console.log("Cambiamos el lugar");

            var place = autocomplete.getPlace();
            // modifica el zoom para que se pueda ver todo el lugar que acabamos de seleccionar
            // el zoom es más bajo si seleccionamos un país que si seleccionamos un lugar en especifico
            // tienda, plaza, parque o local.

            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(15);
            }

            marker.setPlace({
                placeId: place.place_id,
                location: place.geometry.location
            });

            marker.setVisible(true);
        });
    });
});
