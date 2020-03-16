require('dotenv/config');
const auth_link = 'https://www.strava.com/oauth/token';
const results = document.querySelector("#results");
console.log(results);

// Activités Spécifiques

function getActivity(response){
    array = ['3021912453', '2409058705', '2264900813', '2766037346', '2763328555']
    array.forEach(activity => {
        const activity_link = `https://www.strava.com/api/v3/activities/${activity}?access_token=${response.access_token}`
        fetch(activity_link)
            .then((response) => response.json())
            .then((data) => {
                let parcours = `
                <p>${data.name}</p>
                <p>Distance: ${data.distance} metres</p>
                <p>Durée: ${data.moving_time} secondes</p>
                <p>Denivele: ${data.total_elevation_gain} m</p>
                `;
                results.insertAdjacentHTML("beforeend", parcours);
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


