class Api::StreamRoomsController < ApplicationController

  def index
    @stream_rooms = StreamRoom.all
    render json: @stream_rooms.to_json
  end

  def show
    @stream_room = StreamRoom.find(params[:id])
    render json: {
      room: @stream_room,
      messages: @stream_room.messages
    }.to_json
  end

  def create
    @room = StreamRoom.new(stream_room_params)
    if @room.save!
      render json: @room.to_json
    else
      render json: @room.errors.full_messages
    end
  end

  def stream_room_params
    params.require(:stream_room).permit(:id, :user_id, :name)
  end
end
