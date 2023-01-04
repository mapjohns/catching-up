class PostsController < ApplicationController

    def create
        binding.pry
    end

    private

    def post_params
        params.require(:post).permit(:message, :user_id)
    end
end
