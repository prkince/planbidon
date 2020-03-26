class RemovePhotoUrlFromParcours < ActiveRecord::Migration[6.0]
  def change
    remove_column :parcours, :photo_url
    remove_column :parcours, :photo_url_two
    remove_column :parcours, :photo_url_three
  end
end
