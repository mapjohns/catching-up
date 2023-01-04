class PostsController < ApplicationController

    def create
        post= Post.new(post_params)
        post.save
        render json: post, include: [:user], except: [:created_at, :updated_at]
    end

    private

    def post_params
        params.require(:post).permit(:message, :user_id)
    end
end
