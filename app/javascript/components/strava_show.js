
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
            </li>
        `;
        mapShow.insertAdjacentHTML("beforeend", parcours);
        let map = L.map(`map${object.id}`).fitBounds(L.Polyline.fromEncoded(object.map_id).getLatLngs());
        L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
            attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
