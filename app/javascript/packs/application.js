require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

//import '../components/strava_api.js'; App test
 
//import '../components/strava.js';
if (document.getElementById("cardsPrk")){
	import '../components/strava_routes.js';
}
