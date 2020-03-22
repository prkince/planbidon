puts 'Cleaning database...'
Parcour.destroy_all

puts "Creating parcours"

Parcour.create!(
	titre: 'Saint Rémy - Vieille Eglise - Saint Rémy', 
	distance: '64', 
	duree: '3h30 à 20km/h de moyenne sans pauses.', 
	denivele: '707 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/planbidon/image/upload/v1584890082/1.%20Saint%20Re%CC%81my%20-%20Vieille%20Eglise%20-%20Saint%20Re%CC%81my/pb_1_i2dzub.jpg', 
	photo_url_two: 'https://res.cloudinary.com/planbidon/image/upload/v1584890082/1.%20Saint%20Re%CC%81my%20-%20Vieille%20Eglise%20-%20Saint%20Re%CC%81my/pb_2_wzdisd.jpg',
	photo_url_three: 'https://res.cloudinary.com/planbidon/image/upload/v1584890082/1.%20Saint%20Re%CC%81my%20-%20Vieille%20Eglise%20-%20Saint%20Re%CC%81my/pb_3_bpjwud.jpg',
	description: "Le Parc naturel régional de la Haute Vallée de Chevreuse : ses domaines et châteaux, ses maisons en meulière au sein de villages charmants, ses routes désertes qui traversent des paysages naturels boisés... Ce parcours cyclotouristique par excellence est l’un des plus populaires d’Ile-de-France.",
	strava_id: "15738524",
	athlete_id: "28847458"
)

Parcour.create!(
	titre: 'Etampes - Andonville - Etampes', 
	distance: '103', 
	duree: '4h22 à 25km/h de moyenne sans pauses.', 
	denivele: '569 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/planbidon/image/upload/v1584890480/2.%20Etampes%20-%20Andonville%20-%20Etampes/pb_2_nsziek.jpg', 
	photo_url_two: 'https://res.cloudinary.com/planbidon/image/upload/v1584890473/2.%20Etampes%20-%20Andonville%20-%20Etampes/pb_3_djbsqo.jpg',
	photo_url_three: 'https://res.cloudinary.com/planbidon/image/upload/v1584890479/2.%20Etampes%20-%20Andonville%20-%20Etampes/pb_1_hxkio3.jpg',
	description: "A cheval entre l’Ile-de-France et le Centre-Val de Loire, nous vous présentons la Beauce. Territoire défriché, les arbres y sont rares et les cultures céréalières s’étendent à perte de vue. Selon Rabelais, l'appellation 'Beauce' viendrait de la légende de Gargantua, qui un jour, ayant traversé la région sur sa jument, entra dans une forêt infestée de mouches. La jument, énervée par la présence des insectes, tua toutes les bêtes avec sa queue et arracha tous les arbres. C'est alors que Gargantua s'écria ''Oh ! Que c'est beau, ce !'', d'où le nom. Au départ d’Etampes, planbidon a une affection particulière pour ce parcours qui offre un dépaysement et une tranquillité absolus.",
	strava_id: "14344592",
	athlete_id: "28847458"
)

Parcour.create!(
	titre: 'Mennecy - Milly - Mennecy', 
	distance: '112', 
	duree: '5h30 à 20km/h de moyenne sans pauses.', 
	denivele: '966 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/planbidon/image/upload/v1584896413/4.%20Mennecy%20-%20Milly%20-%20Mennecy/pb_2_zpipra.jpg', 
	photo_url_two: 'https://res.cloudinary.com/planbidon/image/upload/v1584896413/4.%20Mennecy%20-%20Milly%20-%20Mennecy/pb_3_mxcquo.jpg',
	photo_url_three: 'https://res.cloudinary.com/planbidon/image/upload/v1584896413/4.%20Mennecy%20-%20Milly%20-%20Mennecy/pb_1_nprw88.jpg',
	description: "Planbidon vous invite à parcourir la méconnue Vallée de l’Essonne. En longeant l’Essonne et ses affluents, vous pourrez observer de superbes châteaux, profiter de paysages verdoyants et, après une pause dans la ville médiévale de Milly-la-Forêt, vous émerveiller devant le Cyclop. Sculpture monumentale réalisé par Jean Tinguely avec l’aide d’autres artistes, notamment sa compagne Nikki de Saint Phalle, sa découverte vaut à elle seule le voyage ! L’un des parcours les plus denses de planbidon!",
	strava_id: "14073282",
	athlete_id: "28847458"
)

Parcour.create!(
	titre: 'Coulommiers - La Vanne - Coulommiers', 
	distance: '80', 
	duree: '3h50 à 20km/h de moyenne sans pauses.', 
	denivele: '660 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/planbidon/image/upload/v1584896000/3.%20Coulommiers%20-%20La%20Vanne%20-%20Coulommiers/pb_3_zyp3q5.jpg', 
	photo_url_two: 'https://res.cloudinary.com/planbidon/image/upload/v1584895999/3.%20Coulommiers%20-%20La%20Vanne%20-%20Coulommiers/pb_2_jcyutb.jpg',
	photo_url_three: 'https://res.cloudinary.com/planbidon/image/upload/v1584895999/3.%20Coulommiers%20-%20La%20Vanne%20-%20Coulommiers/pb_1_d7pwrh.jpg',
	description: "Ce parcours vous entraîne à la découverte du canton de Coulommiers et de la Vallée du Grand Morin. Avec ses nombreux cours d’eau, ses vastes prairies toujours vertes et ses hameaux isolés,  elle doit sa popularité à des artistes tels que Van Gogh ou Toulouse-Lautrec qui sont venus y peindre au cours de leur vie. C’est un itinéraire idéal pour tous ceux qui recherchent le grand air de la campagne à 1h de Paris en transilien.",
	strava_id: "17460441",
	athlete_id: "28847458"
)

Parcour.create!(
	titre: 'Saint Rémy - Saclay - Saint Rémy', 
	distance: '85', 
	duree: '4h à 20km/h de moyenne sans pauses.', 
	denivele: '930 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/planbidon/image/upload/v1584897832/5.%20Saint%20Re%CC%81my%20-%20Saclay%20-%20Saint%20Re%CC%81my/pb_3_w1qsu0.jpg', 
	photo_url_two: 'https://res.cloudinary.com/planbidon/image/upload/v1584897832/5.%20Saint%20Re%CC%81my%20-%20Saclay%20-%20Saint%20Re%CC%81my/pb_2_acu7th.jpg',
	photo_url_three: 'https://res.cloudinary.com/planbidon/image/upload/v1584897832/5.%20Saint%20Re%CC%81my%20-%20Saclay%20-%20Saint%20Re%CC%81my/pb_1_yyzbrx.jpg',
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, veniam perspiciatis. Quae, dignissimos, laborum! Mollitia ad qui itaque, placeat libero voluptatibus delectus fuga vitae quia molestias harum sed possimus maiores.",
	strava_id: "12729771",
	athlete_id: "28847458"
)


Parcour.create!(
	titre: 'Tournan - Champlet - Tournan', 
	distance: '62', 
	duree: '2h35 à 25km/h de moyenne sans pauses.', 
	denivele: '587 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/planbidon/image/upload/v1584896592/10.%20Tournan%20-%20Champlet%20-%20Tournan/pb_5_dsshln.jpg', 
	photo_url_two: 'https://res.cloudinary.com/planbidon/image/upload/v1584890921/10.%20Tournan%20-%20Champlet%20-%20Tournan/pb_1_tykzfp.jpg',
	photo_url_three: 'https://res.cloudinary.com/planbidon/image/upload/v1584890731/10.%20Tournan%20-%20Champlet%20-%20Tournan/pb_3_f6pgns.jpg',
	description: "Bières belges, quart de Sauvage et Suze !",
	strava_id: "14318151",
	athlete_id: "28847458"
)

puts 'Parcours created succesfully!'