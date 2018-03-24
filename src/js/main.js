"use strict";

var nombre = "Alejandro";

var travelMode;
google.maps.event.addDomListener(window, "load", function () {
    // Geolocation => Navigator
    var user_location = new UserLocation(function () {
        // Aquí ya cargamos los mapas y además cargamos localizacion

        travelMode = document.getElementById('travel-mode').value;

        if (travelMode == "0") {
            document.getElementById('travel-mode').addEventListener("change", function () {
                // nota (agregar setTimeOut con style.display = "none")
                document.getElementById('load-travel-mode').style.display = "none";
                travelMode = ev.target.value;
            });
        } else {
            document.getElementById('load-travel-mode').style.display = "none";
        }

        var mapOptions = {
            // configuraciones mapa, zoom, latitud y longitud
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
            // marcadores 
            marker.setPlace({
                placeId: place.place_id,
                location: place.geometry.location
            });

            marker.setVisible(true);
            // fin marcadores

            calculatedDistance(place, user_location);
        });
    });
});

function calculatedDistance(place, origen) {
    var origin = new google.maps.LatLng(origen.latitude, origen.longitude);

    var service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix({
        origins: [origin],
        // localizacion de lugar
        destinations: [place.geometry.location],
        // modo de transporte, driving
        // TravelMode != travelMode
        travelMode: google.maps.TravelMode[travelMode]
    }, function (respuesta, status) {
        // Se ejecuta cuando el servicio de distancia de Maps nos responde
        // probar  console.log(respuesta) antes de la linea de abajo ->  const distancia 
        //console.log(respuesta);
        var info = respuesta.rows[0].elements[0];

        console.log(info);

        var distancia = info.distance.text;
        var duracion = info.duration.text;

        document.getElementById('info').innerHTML = "\n            Est\xE1s a " + distancia + " y " + duracion + " de dicho destino\n        ";
    });
}
