class CreateParcours < ActiveRecord::Migration[6.0]
  def change
    create_table :parcours do |t|

      t.timestamps
    end
  end
end
