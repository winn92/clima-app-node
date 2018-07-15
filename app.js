const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let { direccion: dir, lat, lon } = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(lat, lon);
        return `El clima en ${dir} es de ${temp}°C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion).then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));