Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'root#index'
  get '/ping', to: 'root#ping'

  namespace :api do
    post '/users', to: 'users#create'
    post '/session', to: 'session#create'
    delete '/session', to: 'session#destroy'
  end
end
