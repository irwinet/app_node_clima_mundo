const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

clima.getClima(40.4165, -3.7026)
    .then(console.log)
    .catch(console.log);