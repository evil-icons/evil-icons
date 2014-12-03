require_relative "evil_icons/version"

if defined? ::Rails::Engine
  require_relative 'evil_icons/engine'
elsif defined? ::Sprockets
  require_relative 'evil_icons/sprockets'
end

if defined? Sinatra
  require_relative '../app/helpers/evil_icons/helpers'
end