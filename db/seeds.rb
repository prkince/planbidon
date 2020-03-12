# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database...'
Parcour.destroy_all

puts "Creating parcours"

Parcour.create!(
	titre: 'PARCOURS ETAMPES -ANDONVILLE-ETAMPES', 
	distance: '103', 
	duree: '4h22 à 25km/h de moyenne sans pauses.', 
	denivele: '569 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584021025/planbidon/road_bike_4_munvnw.jpg', 
	photo_url_two: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584021027/planbidon/road_bike_7_bumixd.jpg',
	photo_url_three: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584021026/planbidon/road_bike_2_d21jcu.jpg',
	description: "A cheval entre l’Ile-de-France et le Centre-Val de Loire, nous vous présentons la Beauce. Territoire défriché, les arbres y sont rares et les cultures céréalières s’étendent à perte de vue. Selon Rabelais, l'appellation 'Beauce' viendrait de la légende de Gargantua, qui un jour, ayant traversé la région sur sa jument, entra dans une forêt infestée de mouches. La jument, énervée par la présence des insectes, tua toutes les bêtes avec sa queue et arracha tous les arbres. C'est alors que Gargantua s'écria 'Oh ! Que c'est beau, ce !', d'où le nom. Au départ d’Etampes, planbidon a une affection particulière pour ce parcours qui offre un dépaysement et une tranquillité absolus."
)

Parcour.create!(
	titre: 'Le Tournan !', 
	distance: '62', 
	duree: '2h35 à 25km/h de moyenne sans pauses.', 
	denivele: '587 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584021027/planbidon/road_bike_6_smrdrz.jpg', 
	photo_url_two: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584021025/planbidon/road_bike_3_bbq4go.jpg',
	photo_url_three: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584021025/planbidon/road_bike_5_cbqsdk.jpg',
	description: "Bières belges, quart de Sauvage et Suze !")

Parcour.create!(
	titre: 'De vent et de faux plats', 
	distance: '75', 
	duree: '3h45 à 20km/h de moyenne sans pauses.', 
	denivele: '392 mètres', 
	difficulte: 'Route', 
	photo_url: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584025081/planbidon/road_bike_8_h6jgzw.jpg', 
	photo_url_two: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584025081/planbidon/road_bike_10_llaml7.jpg',
	photo_url_three: 'https://res.cloudinary.com/dovu27lye/image/upload/v1584025080/planbidon/road_bike_9_q83oht.jpg',
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis amet quia consectetur rem eaque sunt modi, ipsam fugiat? At nisi eum tempora deserunt laudantium natus nihil id laboriosam. Molestiae, nihil.")

puts 'Parcours created succesfully!'