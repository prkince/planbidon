class AddPhotosToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :photos, :string
  end
end
