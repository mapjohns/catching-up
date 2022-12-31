class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        user.save
        render json: user, except: [:created_at, :updated_at]
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end
