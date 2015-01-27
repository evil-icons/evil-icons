require_relative "evil_icons/version"

module EvilIcons

  class << self

    def register!
      register_helpers
      register_engine     if rails?
      register_sprockets  if sprockets?
    end

    def rails?
      defined?(::Rails::Engine)
    end

    def sprockets?
      defined?(::Sprockets)
    end

    def root_dir
      File.expand_path('../../', __FILE__)
    end

    def assets_dir
      File.join(root_dir, 'assets')
    end

    def images_dir
      File.join(assets_dir, 'icons')
    end

    def sprite_file
      File.join(root_dir, 'assets', 'sprite.svg')
    end

    private

    def register_engine
      require_relative 'evil_icons/engine'
    end

    def register_sprockets
      Sprockets.append_path(images_dir)
      Sprockets.append_path(assets_dir)
    end

    def register_helpers
      require_relative 'evil_icons/helpers'
    end

  end
end

EvilIcons.register!
