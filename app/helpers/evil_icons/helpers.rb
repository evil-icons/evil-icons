module EvilIcons
  module Helpers

    def evil_icons_sprite
      template = ERB.new File.new(File.join(File.dirname(File.dirname(File.dirname(__FILE__))), "views", "evil_icons", "_icons.erb")).read
      rails_condition template.result
    end

    def evil_icon(name, options = {})
      size  = options[:size] ? "icon--#{options[:size]}" : ''
      options[:class] = "icon icon--#{name} #{size} #{options[:class]}"

      rails_condition "<div class='#{options[:class]}'><svg class='icon__cnt'><use xlink:href='##{name}-icon'/></svg></div>"

    end

    private

    def rails_condition(html)
      if defined? Rails
        html.html_safe
      else
        html
      end
    end
  end
end
