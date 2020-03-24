require('dotenv/config');


const stravaAllParcours = () => {
    // Make an array of all polylines
    let arrayMapIds = [];
    const mapsIds = document.querySelector(".map_ids");
    getMapIds(mapsIds, arrayMapIds);

    // Make an array of all titles
    let arrayMapTitles = [];
    const mapsTitles = document.querySelector(".map_title");
    getMapIds(mapsTitles, arrayMapTitles);

    // Make an array of all ids
    let arrayIds = [];
    const ids = document.querySelector(".ids");
    getMapIds(ids, arrayIds);

    // Make an array of all startpoints
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
            array.push(id)
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
        let colorsArray = ['#4d089a', '#323edd', '#dc2ade', '#e8f044', '#f35588', '#05dfd7', '#a3f7bf', '#ffac41', '#f76a8c', '#ffffff', '#fbcffc', '#05dfd7','#e8f044'];
        let track_color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
        L.polyline(
        coordinates,
            {
                color: track_color,
                weight: 3,
                opacity: .7,
                lineJoin: 'round'
            }
        ).addTo(map).bindPopup(`<a href='./parcours/${arrayIds[index]}'>${arrayMapTitles[index]}</a>`);       
    })
}

export { stravaAllParcours }