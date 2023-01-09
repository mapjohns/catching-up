class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: [:posts, :comments], except: [:password_digest, :created_at, :updated_at]
    end

    def create
        user = User.new(user_params)
        user.save
        render json: user, except: [:created_at, :updated_at]
    end

    def update
        user = User.find_by(id: params[:user][:user_id])
        user.update(user_params)
        render json: user, except: [:created_at, :updated_at]
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :description)
    end
end
