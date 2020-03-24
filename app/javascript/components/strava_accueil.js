
const stravaAccueil = () => {

    let finalArr = [];

    // 4 Get id by strava_id
    let arrayParcoursDetails = [];
    const parcoursDetails = document.querySelector(".parcours_details");
    //console.log(parcoursDetails);
    getIds(parcoursDetails, arrayParcoursDetails);
    //console.log(arrayParcoursDetails);

//     let arrayIds = [];
//     const ids = document.querySelector(".ids");
//     getIds(ids, arrayIds)

    function getIds(ids, array){
        let a = ids.innerText;
        a = a.replace(/}, {/g, '};{');
        a = a.replace('[','')
        a = a.replace(']','');
        a = a.replace(/=>/g,":");
        a = a.replace(/:id/g,'"id"');
        a = a.replace(/:strava_id/g,'"stava_id"');
        a = a.replace(/:distance/g,'"ditance"');
        a = a.replace(/:titre/g,'"tire"');
        a = a.replace(/:duree/g,'"duee"');
        a = a.replace(/:denivele/g,'"deivele"');
        console.log(a);
        a = a.split(';');
        console.log(a);
        a.forEach((obj) => {
            obj = JSON.parse(obj);
            array.push(obj)
        })
    }
    console.log(arrayParcoursDetails);

//     // 5 display everything
//     const newCards = document.querySelector("#cardsPrk");
//     setTimeout(function() { 
//         for (let key in finalArr) {
//         // console.log(finalArr[key]);
//           newCards.insertAdjacentHTML("beforeend", finalArr[key]);
//         }
//     }, 2000);


//     // Get each activity based on strava_id
//     function getActivity(response, array){
//         array.forEach((activity, index) => {
//             const activity_link = `https://www.strava.com/api/v3/routes/${activity}?access_token=${response.access_token}`
//             fetch(activity_link)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     console.log(data); //=> to display all available data
//                     const km = (data.distance *  0.001).toFixed(0);
//                     const measuredTime = new Date(null);
//                     measuredTime.setSeconds(data.estimated_moving_time)
//                     const MHSTime = measuredTime.toISOString().substr(11, 5);
//                     let encodedRoutes = [];
//                     let answer;
//                     arrayParcoursTotal.forEach((parcour, i) => {
//                         if (parseInt(parcour) === data.id){
//                             answer = arrayIds[i]
//                         }
//                     })
//                     let parcours = `
//                         <a href="/parcours/${answer}" style="text-decoration: none">
//                             <li style="list-style-type: none;">
//                                 <div id="map${data.id}" class='mapStrava'></div>
//                                 <div class="overlay">
//                                     <div class="card-category-prk-2">
//                                         <div class="card-details">
//                                             <p>${data.name}</p>
//                                             <p>Distance: ${km} km</p>
//                                             <p>Durée: ${MHSTime} h </p>
//                                             <p>Denivelé: ${Math.round(data.elevation_gain)} m</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                         </a>
//                     `;
//                     // map leafleat
//                     encodedRoutes.push(data.map.polyline);
//                     finalArr.push(parcours);

//                     setTimeout(function() {
//                         let map = L.map(`map${data.id}`).fitBounds(L.Polyline.fromEncoded(data.map.polyline).getLatLngs());
//                         L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//                             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//                             subdomains: 'abcd',
//                             maxZoom: 16
//                         }).addTo(map);

//                         for (let encoded of encodedRoutes) {
//                           var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();

//                           L.polyline(
//                               coordinates,
//                               {
//                                   color: 'white',
//                                   weight: 2,
//                                   opacity: .6,
//                                   lineJoin: 'round'
//                               }
//                           ).addTo(map);
//                         }
//                     }, 2000);
//                 });
//         }); 
//     }
}


export { stravaAccueil } ;
