const nombre = "Alejandro";

google.maps.event.addDomListener(window,"load",() => {
        // Geolocation => Navigator
        const user_location = new UserLocation(() =>{
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
        })
        
        });
})

