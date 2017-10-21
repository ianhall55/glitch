class Message < ApplicationRecord
  belongs_to :user
  belongs_to :stream_room
end
