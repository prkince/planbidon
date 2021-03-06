require('dotenv/config');
const auth_link = 'https://www.strava.com/oauth/token';

// 1 authorize tokens for each athletes

let prkCredentials = [process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REFRESH_TOKEN];
let gaCredentials = [process.env.CLIENT_ID_GA, process.env.CLIENT_SECRET_GA, process.env.REFRESH_TOKEN_GA];

let finalArr = [];

// 2 Load prk details
let arrayPrk = [];
// adding new maps from strava directly 
arrayPrk.push('2763328555');
const stravaIdsPrk = document.querySelector(".strava_ids_prk");
//getStravaIds(stravaIdsPrk, arrayPrk);
reAuthorize(prkCredentials, arrayPrk);

// 3 Load ga details
let arrayGa = [];
// adding new maps from strava directly 
//arrayGa.push('2356262757', '2354166691', '1767601829', '1899780707');
const stravaIdsGa = document.querySelector(".strava_ids_ga");
//getStravaIds(stravaIdsGa, arrayGa);
//reAuthorize(gaCredentials, arrayGa);

// 4 Get id by strava_id
let arrayParcoursTotal = []
const parcoursTotal = document.querySelector(".parcourstotal");
getIds(parcoursTotal, arrayParcoursTotal);

let arrayIds = [];
const ids = document.querySelector(".ids");
getIds(ids, arrayIds)

function getIds(ids, array){
    let a = ids.innerText;
    a = a.replace(/'/g, '"');
    a = JSON.parse(a);
    a.forEach((id) => {
            array.push(id)
    });
}

// 5 display everything
const newCards = document.querySelector("#cardsPrk");
setTimeout(function() { 
    for (let key in finalArr) {
    // console.log(finalArr[key]);
      newCards.insertAdjacentHTML("beforeend", finalArr[key]);
    }
}, 2000);

function reAuthorize(credentials, array){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: credentials[0],
            client_secret: credentials[1],
            refresh_token: credentials[2],
            grant_type: 'refresh_token'
        })
    }).then((response) => response.json())
    .then((response) => getActivity(response, array))      
}

// Get each strava Ids from DB and put it into an array 
function getStravaIds(ids, array){
    let a = ids.innerText;
    a = a.replace(/'/g, '"');
    a = JSON.parse(a);
    a.forEach((id) => {
        if (id.length > 1) {
            array.push(id)
        }
    });
}

// Get each activity based on strava_id
function getActivity(response, array){
    array.forEach((activity, index) => {
        const activity_link = `https://www.strava.com/api/v3/activities/${activity}?access_token=${response.access_token}`
        fetch(activity_link)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); //=> to display all available data
                const km = (data.distance *  0.001).toFixed(2);
                const measuredTime = new Date(null);
                measuredTime.setSeconds(data.moving_time)
                const MHSTime = measuredTime.toISOString().substr(11, 5);
                let encodedRoutes = [];
                let answer;
                arrayParcoursTotal.forEach((parcour, i) => {
                    if (parseInt(parcour) === data.id){
                        answer = arrayIds[i]
                    }
                })
                let parcours = `
                    <a href="/parcours/${answer}" style="text-decoration: none">
                    <div class="card-category-prk-2">
                        <div class="cards-details">
                            <div class="cards-headers">
                                <p>${data.name}</p>
                                <p>Distance: ${km} km</p>
                                <p>Durée: ${MHSTime} h </p>
                                <p>Denivele: ${Math.round(data.total_elevation_gain)} m</p>
                            </div>
                            <div id="map${data.id}" class='mapStrava'></div>
                        </div>
                    </div>
                    </a>
                `;
                finalArr.push(parcours);
                encodedRoutes.push(data.map.polyline);
                // map leafleat
                setTimeout(function() {
                    let map = L.map(`map${data.id}`).fitBounds(L.Polyline.fromEncoded(data.map.polyline).getLatLngs());
                    L.tileLayer(
                        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            maxZoom: 18,
                        }).addTo(map);

                    for (let encoded of encodedRoutes) {
                      var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();

                      L.polyline(
                          coordinates,
                          {
                              color: 'blue',
                              weight: 2,
                              opacity: .7,
                              lineJoin: 'round'
                          }
                      ).addTo(map);
                    }
                }, 3000);
            });
    }); 
}

