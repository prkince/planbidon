class AddDetailsToParcours < ActiveRecord::Migration[6.0]
  def change
  	  add_column :parcours, :photo_url, :string
  	  add_column :parcours, :titre, :string
  	  add_column :parcours, :distance, :string
  	  add_column :parcours, :duree, :string
  	  add_column :parcours, :denivele, :string
  	  add_column :parcours, :difficulte, :string
  	  add_column :parcours, :photo_url_two, :string
  end
end
