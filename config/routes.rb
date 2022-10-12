Rails.application.routes.draw do
  resources :reviews
  resources :trainees
  resources :trainers, only:[:index, :show]
  resources :programs, only:[:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
