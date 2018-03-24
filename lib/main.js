const nombre = "Alejandro";

google.maps.event.addDomListener(window,"load",() => {
        // Geolocation => Navigator
        const user_location = new UserLocation(() =>{
            // configuraciones mapa, zoom, latitud y longitud
            const mapOptions = {
              zoom:6,
              center: {
              lat: user_location.latitude,
              lng: user_location.longitude
           }
        };
        const mapa_element = document.getElementById('map');
        const map = new google.maps.Map(mapa_element, mapOptions)
        
        const search_input = document.getElementById('search-place');
        const autocomplete = new google.maps.places.Autocomplete(search_input);
        
        const marker = new google.maps.Marker({
            map: map
        })

        autocomplete.bindTo("bounds", map);

        google.maps.event.addListener(autocomplete,"place_changed", ()=>{
            console.log("Cambiamos el lugar");
                
            const place = autocomplete.getPlace();
            // modifica el zoom para que se pueda ver todo el lugar que acabamos de seleccionar
            // el zoom es más bajo si seleccionamos un país que si seleccionamos un lugar en especifico
            // tienda, plaza, parque o local.

            if (place.geometry.viewport){
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

            calculatedDistance(place,user_location);    
            
            
        });

    });
});

function  calculatedDistance(place,origen){
    var origin = new google.maps.LatLng(origen.latitude,origen.longitude);

    var service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix({
        origins:[origin],
        // localizacion de lugar
        destinations: [place.geometry.location],
        // modo de transporte, driving
         // TravelMode != travelMode
        travelMode: google.maps.TravelMode.DRIVING
    }, (respuesta,status) => {
        // Se ejecuta cuando el servicio de distancia de Maps nos responde
        // probar  console.log(respuesta) antes de la linea de abajo ->  const distancia 
        //console.log(respuesta);
        const distancia = respuesta.rows[0].elements[0];

        console.log(distancia);
    })
} 

