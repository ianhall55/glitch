class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render json: @user.to_json
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user

    if @user
      logout(@user)
      render json: { message: 'logged out' }
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
  end
end
