class AddPhotoToParcours < ActiveRecord::Migration[6.0]
  def change
  	add_column :parcours, :photo_url_three, :string
  end
end
