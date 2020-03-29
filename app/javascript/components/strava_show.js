
const stravaShow = () => {

    const mapShow = document.querySelector("#cardShow");

    let objectParcourDetails;
    const parcoursDetails = document.querySelector("#parcour_details");
    getIds(parcoursDetails);

    function getIds(ids){
        let a = ids.innerText;
        a = a.replace(/}, {/g, '};{');
        a = a.replace(/=>/g,":");
        a = a.replace(/:id/g,'"id"');
        a = a.replace(/:strava_id/g,'"strava_id"');
        a = a.replace(/:distance/g,'"distance"');
        a = a.replace(/:titre/g,'"titre"');
        a = a.replace(/:duree/g,'"duree"');
        a = a.replace(/:denivele/g,'"denivele"');
        a = a.replace(/:map_id/g,'"map_id"');
        a = a.split(';');
        a = JSON.parse(a);
        objectParcourDetails = a;
    }
    getActivity(objectParcourDetails);

    function getActivity(object){
        let parcours = `
            <li style="list-style-type: none;">
                <div id="map${object.id}" class='mapStrava'></div>
                <div class="overlay">
                    <div class="card-category-prk-2">
                        <div class="card-details">
                            <p>${object.titre}</p>
                        </div>
                    </div>
                </div>
            </li>
        `;
        mapShow.insertAdjacentHTML("beforeend", parcours);
        let map = L.map(`map${object.id}`).fitBounds(L.Polyline.fromEncoded(object.map_id).getLatLngs());
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
        }).addTo(map);
        var coordinates = L.Polyline.fromEncoded(object.map_id).getLatLngs();

        L.polyline(
          coordinates,
          {
              color: 'rgba(21, 173, 181, 0.8)',
              weight: 3,
              opacity: .8,
              lineJoin: 'round'
          }
        ).addTo(map);
    };
}
export { stravaShow } ;
