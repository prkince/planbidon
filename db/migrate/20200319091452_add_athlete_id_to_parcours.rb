class AddAthleteIdToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :athlete_id, :string
  end
end
