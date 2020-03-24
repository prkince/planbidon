require('dotenv/config');


const stravaAllParcours = () => {
    let arrayMapIds = [];
    const mapsIds = document.querySelector(".map_ids");
    getMapIds(mapsIds, arrayMapIds);


    let arrayMapStartIds = [];
    const mapsStartIds = document.querySelector(".map_start_ids");
    getMapIds(mapsStartIds, arrayMapStartIds);
    let array_start_id = [];
    arrayMapStartIds.forEach((startId) => {
        let ar = startId.split(",");
        let ab = [];
        ar.forEach(coordinate => ab.push(parseFloat(coordinate)));
        array_start_id.push(ab);
    })

    function getMapIds(ids, array){
        let a = ids.innerText;
        a = a.replace(/'/g, '"');
        a = JSON.parse(a);
        a.forEach((id) => {
            if (id.length > 1) {
                array.push(id)
            }
        });
    }

    let map = L.map('map').setView([48.859489, 2.320582], 8);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(map);
    arrayMapIds.forEach((mapId, index)=> {
        var coordinates = L.Polyline.fromEncoded(mapId).getLatLngs();
        L.polyline(
        coordinates,
            {
                color: 'white',
                weight: 2,
                opacity: .7,
                lineJoin: 'round'
            }
        ).addTo(map);
        L.marker(array_start_id[index]).addTo(map);       
    })
}

export { stravaAllParcours }