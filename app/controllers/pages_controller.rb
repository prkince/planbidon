class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :contact]

  def home
  	@parcours = Parcour.all
    @parcours_details = @parcours.map { |parcour| 
      {
        id: parcour.id, 
        strava_id: parcour.strava_id, 
        titre: parcour.titre, 
        distance: parcour.distance, 
        duree: parcour.duree,
        denivele: parcour.denivele,
        map_id: parcour.map_id
      }
    }

  end
end