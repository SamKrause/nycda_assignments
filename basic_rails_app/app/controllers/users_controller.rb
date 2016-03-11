class UsersController < ApplicationController
  def index
    @user = User.find(1)
    @users = User.all
  end

  def new
    @user = User.new(params[:user])
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "Success!"
      redirect_to '/users'
    else
      flash[:alert] = "Didn't work."
      redirect_to '/users'
    end
  end
end
