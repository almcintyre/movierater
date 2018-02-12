require 'rails_helper'

RSpec.describe ReviewController, type: :controller do

  describe 'POST #create' do
    let!(:movie) { FactoryBot.create(:movie) }
    let!(:review) { FactoryBot.create(:review, movie_id: movie.id) }

    it 'creates a new review' do
      current_count = Review.count
      post :create, params: {review: {email: review.email, comment: review.comment, rating: review.rating, movie_id: review.movie.id}}
      expect(Review.count).to eq(current_count + 1)
      expect(Review.first.email).to eq('email@google.com')
      expect(Review.first.rating).to eq('3')
      expect(Review.first.comment).to eq('This is a great movie!')
      expect(Review.first.movie_id).to eq(movie.id)
    end
  end
end
