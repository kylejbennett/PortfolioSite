Rails.application.routes.draw do
  
	root 'home#index'
  	
  	get 'home/index'
  	get 'home/portfolio'
  	get 'home/contact'

  	post 'home/sendmail' => 'home#sendmail'
  
end
