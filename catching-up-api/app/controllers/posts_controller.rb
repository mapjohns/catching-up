class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts, include: [:user, :comments], except: [:password_digest, :created_at, :updated_at]
    end
    
    def create
        post= Post.new(post_params)
        post.save
        render json: post, include: [:user], except: [:password_digest, :created_at, :updated_at]
    end

    def update
        post = Post.find_by(id: post_params[:post_id])
        post.update(:message => post_params[:message])
        render json: post, include: [:user], except: [:password_digest,, :created_at, :updated_at]
    end

    def destroy
        post = Post.find_by(id: params[:id])
        post.destroy
    end


    private

    def post_params
        params.require(:post).permit(:message, :user_id, :post_id)
    end
end
