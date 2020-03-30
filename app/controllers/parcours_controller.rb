class ParcoursController < ApplicationController
  before_action :set_parcour, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, :only => [:edit, :new, :create, :update, :destroy]

  def index
    @parcours = Parcour.all
    @parcours_map_id = @parcours.map { |parcour| parcour.map_id }
    @parcours_map_start_id = @parcours.map { |parcour| parcour.map_start_id }
    @parcours_titre = @parcours.map { |parcour| parcour.titre }
    @parcours_id = @parcours.map { |parcour| parcour.id }

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

  def show
    @parcour_start = @parcour.map_start_id.gsub!(',', "%2C")
    @parcour_details = 
      {
        id: @parcour.id, 
        strava_id: @parcour.strava_id, 
        titre: @parcour.titre, 
        distance: @parcour.distance, 
        duree: @parcour.duree,
        denivele: @parcour.denivele,
        map_id: @parcour.map_id
      }
  end

  def new
    @parcour = Parcour.new
  end

  def create
    @parcour = Parcour.new(parcour_params)
    @parcour.save
  end

  def edit
  end

  def update
    @parcour.update(parcour_params)
    redirect_to parcour_path(@parcour)
  end

  def destroy
    @parcour.destroy
    redirect_to parcours_path
  end

  private 

  def set_parcour
    @parcour = Parcour.find(params[:id])
  end

  def parcour_params
    params.require(:parcour).permit(
      :titre, :distance, :duree, :denivele, :difficulte, :description, 
      :strava_id, :athlete_id, :map_id, :map_start_id, :synopsis, 
      :tinder_spot, :se_cultiver, :se_ravitailler, :transport, :photos, :relive_id
      )
  end
end
