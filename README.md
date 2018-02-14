# README

### Clone the repository and update your homebrew
```
git clone https://github.com/almcintyre/movierater.git
```

```
brew update
```

```
cd movierater/movierater
```

### Environment

```
nvm install node                
nvm alias default node          
nvm list                       

brew install yarn

rvm install 2.4.1               
rvm use 2.4.1 --default         
rvm list                        

gem install rails
gem install bundler

```

### Qtwebkit

Install qt5.
```
brew install qt@5.5
```

```
echo 'export PATH="$(brew --prefix qt@5.5)/bin:$PATH"' >> ~/.bashrc
```

### Postgresql

```
brew install postgresql
```

```
brew services start postgresql
```

```
bundle exec rails webpacker:install
bundle exec rails webpacker:install:react
```

### React on Rails
```
gem 'react_on_rails', '10.0.2'
bundle install
```

### Creating your db

You should now be able to create your database
```
rake db:create
```
Migrate schema to your database
```
rake db:migrate
```

### Starting rails server
```
rails s
```
Navigate to http://localhost:3000
