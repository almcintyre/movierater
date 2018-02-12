require 'rails_helper'

RSpec.describe Review, type: :model do
  let!(:movie) {FactoryBot.create(:movie)}
  let!(:review) {FactoryBot.create(:review, movie: movie)}

  it 'is valid with valid attributes' do
    expect(review).to be_valid
    expect(review.movie_id).to eq movie.id
  end

  it 'is not valid without an email' do
    review.email = nil
    expect(review).to_not be_valid
  end

  it 'is not valid without a rating' do
    review.rating = nil
    expect(review).to_not be_valid
  end

  it 'is valid without a comment' do
    review.comment = nil
    expect(review).to be_valid
  end

  it 'is not valid without a movie' do
    review.movie = nil
    expect(review).to_not be_valid
  end
end
