const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAF2eSscTH6B5gGgML7aQeYvZaumew_inY`);

    if (data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = data.results[0];
    let { lat, lng: lon } = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat,
        lon,
    }
}

module.exports = {
    getLugarLatLng,
}