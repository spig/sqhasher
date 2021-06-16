require 'sinatra'

DB = ENV['YOP_DB'] || 'http://localhost:5984/yop'

set :haml, :format => :html5

get '/?' do
    erb :index
end
