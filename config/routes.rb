Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # mount action cable
  mount ActionCable.server => '/cable'

  root 'root#index'
  get '/ping', to: 'root#ping'

  namespace :api do
    post      '/users',                to: 'users#create'

    post      '/session',              to: 'session#create'
    delete    '/session',              to: 'session#destroy'

    get       '/stream_rooms',         to: 'stream_rooms#index'
    get       '/stream_rooms/:id',     to: 'stream_rooms#show'
    post      '/stream_rooms',         to: 'stream_rooms#create'

    get       '/messages',             to: 'messages#index'
    post      '/messages',             to: 'messages#create'
  end
end
