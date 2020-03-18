class AddStravaIdToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :strava_id, :string
  end
end
