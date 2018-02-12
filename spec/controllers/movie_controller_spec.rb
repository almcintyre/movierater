require 'rails_helper'
require 'webmock/rspec'
WebMock.disable_net_connect!(allow_localhost: true)

RSpec.describe MovieController, type: :controller do

  describe 'GET #index' do
    let!(:genre) {FactoryBot.create(:genre)}
    let!(:movie) {FactoryBot.create(:movie, genre: genre.name)}
    let!(:review) {FactoryBot.create(:review, movie: movie)}

    it 'returns all movies from DB' do
      get :index
      expect(response.status).to eq(200)
      expect(assigns(:movies)).to match(Movie.all)
    end
  end
end
