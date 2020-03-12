require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

const cardOver = document.querySelectorAll('.cardFront');

cardOver.forEach((card) => {
	card.addEventListener('mouseover', (event) => {
		console.log(event);
 		event.target.innerText = `<p>Distance: <%= parcour.distance %> kilometres</p>
							<p>Durée: <%= parcour.duree %></p>
							<p>Denivele: <%= parcour.denivele %></p>
							<p>Type: <%= parcour.difficulte %></p>`;
	});
});