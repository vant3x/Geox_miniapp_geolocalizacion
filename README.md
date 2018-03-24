# Geox mini app con gelocalización y mapas

Este proyecto se encuentra construido completamente en JavaScript puro usando algunas de las últimas caracteristicas que ofrece ES56/7 y la API de Google Maps.

![captura de pantalla 2018-03-24 a la s 3 39 32 a m](https://user-images.githubusercontent.com/11634391/37862065-01023166-2f15-11e8-8a4a-a41ef5d53b97.png)
## NOTA 1: 
Para poder probar de forma local el proyecto debe ser mediante un servidor local, ya sea usando Python en la terminal, ruby, nodejs o incluso Apache con Mamp o Xampp. 

En caso de probarlo en producción también hay que tener en cuenta que la web debe ser HTTPS y no HTTP por algunas cuestiones del mismo Google y por seguridad,  también si piensan personalizarlo y hacer cambios, necesitan generar su propia key para darle permiso a su sitio web de acceder a la localización, pueden hacerlo en el siguiente <a href="https://console.cloud.google.com/apis/credentials/key">link</a>  , allí agregan su sitio  como se ve en la imagen( también si están en localhost deben agregarlo para que pueda usarse la API)  ![captura de pantalla 2018-03-24 a la s 3 52 35 a m](https://user-images.githubusercontent.com/11634391/37862202-231d1566-2f17-11e8-8243-fa9288174124.png)  n ![captura de pantalla 2018-03-24 a la s 3 54 38 a m](https://user-images.githubusercontent.com/11634391/37862208-37b90a2a-2f17-11e8-9f11-b8442a905795.png) Luego de realizar estos pasos se les va a generar su key ![captura de pantalla 2018-03-24 a la s 3 59 24 a m](https://user-images.githubusercontent.com/11634391/37862239-c73d5cb4-2f17-11e8-989a-b8b708b66448.png)
Con la nueva key generada ahora reemplazan la key predefinida en el proyecto 
  ![captura de pantalla 2018-03-24 a la s 3 49 15 a m](https://user-images.githubusercontent.com/11634391/37862153-60873dd8-2f16-11e8-9d6f-d98c30ff4903.png)
  
  ## NOTA 2:
  Parece que en algunas versiones más actuales de Chrome el proyecto no corre del todo bien, pero en otros navegadores como Firefox no hay problema, igual deberan probar si todo funciona. 
