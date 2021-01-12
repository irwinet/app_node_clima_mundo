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

// clima.getClima(40.4165, -3.7026)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        let infoLugar = await lugar.getLugarLatLng(direccion);
        let infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng);
        return `El clima de ${direccion} es de ${infoClima}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(console.log);