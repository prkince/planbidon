require('dotenv/config');
const auth_link = 'https://www.strava.com/oauth/token';
//const results = document.querySelector("#results");
let finalArr = [];

// Activités Spécifiques

function getActivity(response){
    array = ['1652492473', '3021912453', '2409058705', '2264900813', '2766037346', '2763328555']
    array.forEach((activity, index) => {
        const activity_link = `https://www.strava.com/api/v3/activities/${activity}?access_token=${response.access_token}`
        fetch(activity_link)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const km = (data.distance *  0.001).toFixed(2);
                const measuredTime = new Date(null);
                measuredTime.setSeconds(data.moving_time)
                const MHSTime = measuredTime.toISOString().substr(11, 5);           
                let parcours = `
                        <div class="card-category-prk-2">
                            <div class="cards-details">
                                <div class="cards-headers">
                                    <p>${data.name}</p>
                                    <p>Distance: ${km} km</p>
                                    <p>Durée: ${MHSTime} h </p>
                                    <p>Denivele: ${Math.round(data.total_elevation_gain)} m</p>
                                    <p>Parcours numéro: INDEX ${index}</p>
                                </div>
                                <iframe height='405' width='590' 
                                frameborder='0' allowtransparency='true' 
                                scrolling='no' 
                                src='https://www.strava.com/activities/${data.id}/embed/${data.embed_token}'>
                                </iframe>
                                <div class="cards-footers"></div>
                            </div>
                        </div>
                `;
                //results.insertAdjacentHTML("beforeend", parcours);
                // mettre toutes les activités dans un array
                finalArr.push(parcours);
            });
    }); 
}


// Toutes mes activitées
// function getActivities(res){
// 	const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
// 	fetch(activities_link)
// 		.then((res) => console.log(res.json()))
// }

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: process.env.REFRESH_TOKEN,
            grant_type: 'refresh_token'
        })
    }).then((response) => response.json())
    .then((response) => getActivity(response))      
}

reAuthorize();

const newCards = document.querySelector("#cardsPrk");
console.log(finalArr);
setTimeout(function() { 
    for (let key in finalArr) {
      newCards.insertAdjacentHTML("beforeend", finalArr[key]);
      console.log(key, finalArr[key]);
    }
}, 2000);


// const cardOver = document.querySelectorAll('.cardFront');

// cardOver.forEach((card) => {
//     card.addEventListener('mouseover', (event) => {
//         console.log(event);
//         event.target.innerText = `<div id="results"></div>`;
//     });
// });