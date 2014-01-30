get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index

end

post '/grandma' do
  #{}"Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  if params[:user_input] == params[:user_input].upcase
    @grandma = "I'M OLD!"
  else
    @grandma = "Speak up, kiddo!"
  end
    # we have to return the argument for Grandma's words back to hte start


end
