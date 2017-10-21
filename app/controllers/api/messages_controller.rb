class Api::MessagesController < ApplicationController

  def index
    @messages = Message.where(stream_room_id: params[:stream_room_id])
    render json: {
      messages: @messages,
      roomId: params[:stream_room_id]
    }.to_json
  end

  def create
    @message = current_user.messages.new(message_params)
    if @message.save
      render json: {
        message: @message,
        roomId: @message.stream_room_id
      }.to_json
    else
      render json: @message.errors.full_messages
    end
  end

  private

  def message_params
    params.require(:message).permit(:id, :message, :stream_room_id)
  end
end
