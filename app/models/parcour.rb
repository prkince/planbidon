class Parcour < ApplicationRecord
	attribute :titre,      :validate => true
	attribute :nickname,  :captcha  => true
	# attribute :distance
	# attribute :duree
	# attribute :denivele
	# attribute :difficulte
	# attribute :description
	# attribute :strava_id
	# attribute :athlete_id
	# attribute :map_id
	# attribute :map_start_id
	# attribute :synopsis
	# attribute :tinder_spot
	# attribute :se_cultiver
	# attribute :se_ravitailler
	# attribute :transport
	# #attribute :photos
	# attribute :relive_id
end
