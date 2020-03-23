require('dotenv/config');


const stravaAllParcours = () => {
    const auth_link = 'https://www.strava.com/oauth/token';

    // 1 authorize tokens for each athletes

    let gaCredentials = [process.env.CLIENT_ID_GA, process.env.CLIENT_SECRET_GA, process.env.REFRESH_TOKEN_GA];

    let finalArr = [];

    // 3 Load ga details
    let arrayGa = [];
    // adding new maps from strava directly 
    //arrayGa.push('2356262757', '2354166691', '1767601829', '1899780707');
    const stravaIdsGa = document.querySelector(".strava_ids_ga");
    getStravaIds(stravaIdsGa, arrayGa);
    reAuthorize(gaCredentials, arrayGa);

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
        let map = L.map('map').setView([48.859489, 2.320582], 8);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);
        let encodedRoutes = [];
        array.forEach((activity) => {
            const activity_link = `https://www.strava.com/api/v3/routes/${activity}?access_token=${response.access_token}`
            fetch(activity_link)
                .then((response) => response.json())
                .then((data) => {
                    encodedRoutes.push(data.map.polyline);
                }); 
        });
        setTimeout(function() {
            for (let encoded of encodedRoutes) {
              var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();

              L.polyline(
                  coordinates,
                  {
                      color: 'black',
                      weight: 2,
                      opacity: .7,
                      lineJoin: 'round'
                  }
              ).addTo(map);
            }
        }, 1000);
    }
}

export { stravaAllParcours }