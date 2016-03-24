class PostsController < ApplicationController
  def new
  end

  def create
    user = Post.create(user_params)
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
    params.require(:user).permit(:user_id,:message)
  end
end
