require 'rails_helper'

RSpec.describe Genre, type: :model do
  let!(:genre) {FactoryBot.create(:genre)}

  it 'is valid with valid attributes' do
    expect(genre).to be_valid
  end

  it 'is not valid without a genre id' do
    genre.genre_id = nil
    expect(genre).to_not be_valid
  end

  it 'is not valid without a name' do
    genre.name = nil
    expect(genre).to_not be_valid
  end
end
