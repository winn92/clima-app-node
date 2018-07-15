const axios = require('axios');

const getClima = async(lat, lon) => {
    let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e0c03645136045c1fd2dab0a8db304ea
    `);

    let { main: { temp } } = data;

    return temp;
}

module.exports = {
    getClima,
}