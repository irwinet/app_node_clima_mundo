const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=702d03d3d8ad09dc8069b97ae08cc44f`,
        //timeout: 1000,
        //headers: { 'x-rapidapi-key': '01b8dae65amsh23c60013630aadfp1d41c8jsna9cc8c908bdc' }
    });

    const resp = await instance.get();

    if (resp.data.cod != 200) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}