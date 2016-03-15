class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(current_user.id)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Success"
      redirect_to user_path @user
    else
      flash[:error] = @user.errors.full_messages
      render '/users/new'
    end
  end

  def destroy
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :team, :email, :password, :password_confirmation, :avatar)
  end
end
