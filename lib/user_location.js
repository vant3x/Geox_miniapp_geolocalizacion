class UserLocation {
    constructor(callback) {
        // Se ejecuta cuando new UserLocation()

        if (navigator.geolocation) {
             // Si tiene la API de geolocalización
                navigator.geolocation.getCurrentPosition((localizacion) => {
                    /* Esto se ejecuta cuando ya tenemos  la geolocalización */
                    this.latitude = localizacion.coords.latitude;
                    this.longitude = localizacion.coords.longitude;
                   
                    callback()
                })
            } else {
                alert("Tu navegador no soporta las funcionalidades de esta página");
            }
        } 
}