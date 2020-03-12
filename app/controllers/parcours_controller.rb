class ParcoursController < ApplicationController
  before_action :set_parcour, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, :only => [:edit, :new, :create, :update, :destroy]

  def index
    @parcours = Parcour.all
  end

  def show
  end

  def new
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
