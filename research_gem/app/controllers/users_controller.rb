class UsersController < ApplicationController

  def new
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    redirect_to '/'
  end

  def show
  end

  def destroy
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:email,:role,:password)
  end

end
