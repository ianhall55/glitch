class ApplicationController < ActionController::Base
  include ::ActionController::Serialization
  
  helper_method :current_user, :logged_in?

  private

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout(user)
    user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_logged_in
    render json: {message: 'invalid credentials'}, status: 401 if !current_user
  end

  def authenticate_request
    if session[:session_token] != current_user.session_token
      render json: {message: 'Unauthorized Request'}, status: 404
    end
  end


end
