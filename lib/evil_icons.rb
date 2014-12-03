require_relative "evil_icons/version"

module EvilIcons

  class << self

    def register!
      if rails?
        register_engine
      elsif sprockets
        register_sprockets
      end

      register_sinatra if sinatra?
    end

    def rails?
      defined?(::Rails::Engine)
    end

    def sprockets?
      defined?(::Sprockets)
    end

    def sinatra?
      defined?(Sinatra)
    end

    def root_dir
      File.expand_path('../../', __FILE__)
    end

    def sprite_file
      File.join(root_dir, 'app', 'views', 'evil_icons', '_icons.html')
    end

    def images_dir
      File.join(root_dir, 'app', 'assets', 'images')
    end

    def stylesheets_file
      File.join(root_dir, 'app', 'assets', 'stylesheets')
    end


    private

    def register_engine
      require_relative 'evil_icons/engine'
    end

    def register_sprockets
      Sprockets.append_path(images_dir)
      Sprockets.append_path(stylesheets_dir)
    end

    def register_sinatra
       require_relative '../app/helpers/evil_icons/helpers'
    end

  end
end

EvilIcons.register!
