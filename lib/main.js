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

        });
})

