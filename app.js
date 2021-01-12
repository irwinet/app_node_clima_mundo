const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
const encodeUrl = encodeURI(argv.direccion);
console.log(encodeUrl);

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=702d03d3d8ad09dc8069b97ae08cc44f`,
    //timeout: 1000,
    //headers: { 'x-rapidapi-key': '01b8dae65amsh23c60013630aadfp1d41c8jsna9cc8c908bdc' }
});

instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });