require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

//import '../components/strava_api.js'; App test
//import '../components/strava.js';
import { stravaRoutes } from '../components/strava_routes.js';
if(document.getElementById("cardsPrk")){
	stravaRoutes();
}

import { stravaAllParcours } from '../components/strava_all_parcours.js';
if(document.getElementById("map")){
	stravaAllParcours();
}