class AddMapStartIdToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :map_start_id, :string
  end
end
