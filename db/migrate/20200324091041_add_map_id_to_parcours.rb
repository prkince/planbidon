class AddMapIdToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :map_id, :string
  end
end
