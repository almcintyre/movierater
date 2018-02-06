Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'movie#index'
  post 'review/new', to: 'review#create'
  get 'movie/reviews', to: 'movie#reviews'
end
