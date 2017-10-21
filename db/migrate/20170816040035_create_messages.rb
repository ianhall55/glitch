class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer     :user_id,          null: false
      t.integer     :stream_room_id,   null: false
      t.string      :message
      t.timestamps
    end
  end
end
