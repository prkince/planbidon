class ParcoursController < ApplicationController
  before_action :set_parcour, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, :only => [:edit, :new, :create, :update, :destroy]

  def index
    @parcours = Parcour.all
    @parcours_map_id = @parcours.map { |parcour| parcour.map_id }
    @parcours_map_start_id = @parcours.map { |parcour| parcour.map_start_id }
    @parcours_titre = @parcours.map { |parcour| parcour.titre }
    @parcours_id = @parcours.map { |parcour| parcour.id }
  end

  def show
  end

  def new
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

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private 

  def set_parcour
    @parcour = Parcour.find(params[:id])
  end
end
