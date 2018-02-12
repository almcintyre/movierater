Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root 'movie#index'
  post 'review/new', to: 'review#create'
  get 'movie/reviews', to: 'movie#reviews'
  get 'reviews/show', to: 'review#show'
  get 'reviews/recent', to: 'review#recent_reviews'
end
