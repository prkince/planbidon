require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

//import '../components/strava_test.js'

//import '../components/strava_api.js'; App test
//import '../components/strava.js';
import { stravaRoutes } from '../components/strava_routes.js';
if(document.getElementById("newCard")){
	stravaRoutes();
}

import { stravaAllParcours } from '../components/strava_all_parcours.js';
if(document.getElementById("map_container")){
	stravaAllParcours();
}

import { stravaAccueil } from '../components/strava_accueil.js';
if(document.getElementById("accueilCard")){
	stravaAccueil();
}

import { stravaShow } from '../components/strava_show.js';
if(document.getElementById("cardShow")){
	stravaShow();
}

//import '../components/strava_show.js';
