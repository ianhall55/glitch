class CreateStreamRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :stream_rooms do |t|
      t.integer   :user_id,     null: false
      t.string    :name,        null: false
      t.timestamps
    end
  end
end
