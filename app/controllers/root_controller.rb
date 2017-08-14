class RootController < ApplicationController
  def index
    @user = current_user.to_json
  end

  def ping
    render json: {
      app: 'glitch',
      developer: 'ian hall',
      email: 'ian@ianhall.io',
      description: 'bad twitch clone'
    }
  end
end
