class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    puts "THIS IS THE PARAMS " + params[:session][:email] + " " + params[:session][:password]
    if user && user.authenticate(params[:session][:password])
        session[:user_id] = user.id
    else
      flash[:notice] = "Log in failed"
    end
        redirect_to '/'
  end

  def destroy
    if session[:user_id]
      session.clear
    end
    redirect_to '/'
  end

end
