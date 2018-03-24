"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserLocation = function UserLocation(callback) {
    var _this = this;

    _classCallCheck(this, UserLocation);

    // Se ejecuta cuando new UserLocation()

    if (navigator.geolocation) {
        // Si tiene la API de geolocalización
        navigator.geolocation.getCurrentPosition(function (localizacion) {
            /* Esto se ejecuta cuando ya tenemos  la geolocalización */
            _this.latitude = localizacion.coords.latitude;
            _this.longitude = localizacion.coords.longitude;

            callback();
        });
    } else {
        alert("Tu navegador no soporta las funcionalidades de esta página");
    }
};
