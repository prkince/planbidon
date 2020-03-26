class AddReliveIdToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :relive_id, :string
  end
end
