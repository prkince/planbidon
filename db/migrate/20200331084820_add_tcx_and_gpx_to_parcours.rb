class AddTcxAndGpxToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :gpx, :string
  	add_column :parcours, :tcx, :string
  end
end
