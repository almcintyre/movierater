require 'rails_helper'

RSpec.describe Movie, type: :model do
  let!(:movie) {FactoryBot.create(:movie)}

  it 'is valid with valid attributes' do
    expect(movie).to be_valid
  end

  it 'is not valid without a title' do
    movie.title = nil
    expect(movie).to_not be_valid
  end

  it 'is not valid without a release date' do
    movie.release_date = nil
    expect(movie).to_not be_valid
  end

  it 'is not valid without a poster' do
    movie.poster = nil
    expect(movie).to_not be_valid
  end
end
