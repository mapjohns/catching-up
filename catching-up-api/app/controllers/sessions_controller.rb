class SessionsController < ApplicationController

    def create
        user = User.find_by(:username => params[:user][:username])
        if user && !!user.authenticate(params[:user][:password])
            render json: user, except: [:password_digest, :created_at, :updated_at]
        end
        
    end

end