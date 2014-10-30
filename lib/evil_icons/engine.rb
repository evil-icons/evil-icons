module EvilIcons
  class Engine < Rails::Engine

    initializer 'evil_icons.view_helpers' do
      ActiveSupport.on_load :action_view do
        include ::EvilIcons::Helpers
      end
    end

  end
end

