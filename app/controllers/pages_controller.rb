class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  	@parcours = Parcour.all

  	@parcours_strava_id_prk = []
    @parcours_strava_id_ga = []
    @parcours_total = []
    @parcours.each do |parcour|
      if parcour.athlete_id == '40594550'
        @parcours_strava_id_prk << parcour.strava_id
        @parcours_total.unshift(parcour.strava_id)
      else 
        @parcours_strava_id_ga << parcour.strava_id
        @parcours_total << parcour.strava_id
      end
    end

    @parcours_id = []
    @parcours_total.each do |variable|
      @parcours.each do |parcour|
        if variable == parcour.strava_id
          @parcours_id << parcour.id
        end 
      end
    end 
  end
end