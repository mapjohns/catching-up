class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, include: [:user], except: [:created_at, :updated_at]
    end

    def create
        comment = Comment.new(comment_params)
        comment.save
        render json: comment, include: [:user, :post], except: [:created_at, :updated_at]

    end

    def update
        comment = Comment.find_by(id: params[:id])
        comment.update(comment_params)
        render json: comment, except: [:created_at, :updated_at]
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
    end

    private
    
    def comment_params
        params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
