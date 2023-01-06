class CommentsController < ApplicationController

    def create
        comment = Comment.new(comment_params)
        comment.save
        render json: comment, include: [:user, :post], except: [:created_at, :updated_at]

    end

    private
    
    def comment_params
        params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
