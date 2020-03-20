class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  	@parcours = Parcour.all

  	@parcours_strava_id_prk = []
    @parcours_strava_id_ga = []
    @parcours.each do |parcour|
      parcour.athlete_id == '40594550' ? @parcours_strava_id_prk << parcour.strava_id : @parcours_strava_id_ga << parcour.strava_id
  	end

    @parcours_id = []

    @parcours.each do |parcour|
      if parcour.athlete_id == '40594550' 
        @parcours_id << parcour.id
      end 
    end
    @parcours.each do |parcour|
      if parcour.athlete_id != '40594550' 
        @parcours_id << parcour.id
      end 
    end

  end
end