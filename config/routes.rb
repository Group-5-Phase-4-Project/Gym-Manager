Rails.application.routes.draw do
  resources :reviews
  resources :trainees
  resources :trainers, only:[:index, :show]
  resources :programs, only:[:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post 'sessions', to: "session#create"
  post 'logout', to: "session#destroy"

  # Defines the root path route ("/")
  # root "articles#index"
  root 'welcome#index'
  post 'signup', to: 'trainees#create' 
  post 'login', to: 'sessions#create', as: 'log_in'
  delete 'logout', to: 'sessions#destroy'
  get 'password', to: 'passwords#edit', as: 'edit_password'
  patch 'password', to: 'passwords#update'
  get 'password/reset', to: 'password_resets#new'
  post 'password/reset', to: 'password_resets#create'
  get 'password/reset/edit', to: 'password_resets#edit'
  patch 'password/reset/edit', to: 'password_resets#update'
  get 'me', to: 'trainees#show'
end
