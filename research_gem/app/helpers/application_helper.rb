module ApplicationHelper
  def current_user
    return User.find_by_id(session[:user_id])
  end

  def find_user_email (user_id)
    return User.find_by_id(user_id).email
  end

end
