class HomeController < ApplicationController
  def index
  end

  def porfolio
  end

  def contact
  end

  def resume
  end

  def sendmail
    @name=params[:name]
      @email=params[:email]
      @body=params[:body]

      m = Mandrill::API.new
      message = {
        :subject=> "Portfolio Email",
        :from_name=> "#{@name}",
        :text=>"",
        :to=>[
            {
            :email=> "kyle.j.bennett5@gmail.com",
            :name=> "Kyle Bennett"
            }
            ],
            :html=>"<html><p>#{@body}</p></html>",
            :from_email=>"#{@email}"
    }
      sending = m.messages.send message
      puts sending

      redirect_to root_path
      flash[:notice] = "Your message has been sent!"
  end

end
