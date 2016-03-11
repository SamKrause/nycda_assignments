class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.integer :boat_id
      t.string :name
      t.integer :con_require
      t.string :cargo
      t.string :origin
      t.integer :cost
      t.string :destination

      t.timestamps null: false
    end
  end
end
