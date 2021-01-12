const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=702d03d3d8ad09dc8069b97ae08cc44f&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}