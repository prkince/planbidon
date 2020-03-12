class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  	@parcours = Parcour.all
  end
end
