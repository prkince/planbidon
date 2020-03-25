class AddMoreDetailsToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :synopsis, :string
  	add_column :parcours, :tinder_spot, :string
  	add_column :parcours, :se_cultiver, :string
  	add_column :parcours, :se_ravitailler, :string
  	add_column :parcours, :transport, :string
  end
end