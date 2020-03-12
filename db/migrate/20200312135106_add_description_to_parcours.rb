class AddDescriptionToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :description, :text
  end
end
