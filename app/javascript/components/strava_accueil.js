
const stravaAccueil = () => {

    let finalArr = [];
    const newCards = document.querySelector("#cardsPrk");

    let arrayParcoursDetails = [];
    const parcoursDetails = document.querySelector(".parcours_details");
    getIds(parcoursDetails, arrayParcoursDetails);

    function getIds(ids, array){
        let a = ids.innerText;
        a = a.replace(/}, {/g, '};{');
        a = a.replace('[','');
        a = a.substring(0, a.length - 1);
        a = a.replace(/=>/g,":");
        a = a.replace(/:id/g,'"id"');
        a = a.replace(/:strava_id/g,'"strava_id"');
        a = a.replace(/:distance/g,'"distance"');
        a = a.replace(/:titre/g,'"titre"');
        a = a.replace(/:duree/g,'"duree"');
        a = a.replace(/:denivele/g,'"denivele"');
        a = a.replace(/:map_id/g,'"map_id"');
        a = a.split(';');
        a.forEach((obj) => {
            obj = JSON.parse(obj);
            array.push(obj)
        })
    }
    getActivity(arrayParcoursDetails);

    function getActivity(array){
        array.forEach((data, index) => {
            let parcours = `
                <a href="./parcours/${data.id}" style="text-decoration: none">
                    <li style="list-style-type: none;">
                        <div id="map${data.id}" class='mapStrava'></div>
                        <div class="overlay">
                            <div class="card-category-prk-2">
                                <div class="card-details">
                                    <p>${data.titre}</p>
                                    <p>Distance: ${data.distance} km</p>
                                    <p>Durée: ${data.duree}</p>
                                    <p>Denivelé: ${data.denivele}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </a>
            `;
            newCards.insertAdjacentHTML("beforeend", parcours);
            let map = L.map(`map${data.id}`).fitBounds(L.Polyline.fromEncoded(data.map_id).getLatLngs());
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 16
            }).addTo(map);
            var coordinates = L.Polyline.fromEncoded(data.map_id).getLatLngs();
            let colorsArray = ['#4d089a', '#323edd', '#dc2ade', '#e8f044', '#f35588', '#05dfd7', '#a3f7bf', '#ffac41', '#f76a8c', '#ffffff', '#fbcffc', '#05dfd7','#e8f044'];
            L.polyline(
              coordinates,
              {
                  color: colorsArray[index],
                  weight: 2,
                  opacity: .6,
                  lineJoin: 'round'
              }
            ).addTo(map);
        });
    };
}
export { stravaAccueil } ;
