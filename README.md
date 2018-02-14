# README

### Clone the repository
```
git clone https://github.com/almcintyre/movierater.git
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


bundle exec rails webpacker:install
bundle exec rails webpacker:install:react


```

### Qtwebkit

Install qt5.
```
brew install qt@5.5
echo 'export PATH="$(brew --prefix qt@5.5)/bin:$PATH"' >> ~/.bashrc
```

### Postgresql

Install Postgresql.
```
brew install postgresql
brew services start postgresql
```


```
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
