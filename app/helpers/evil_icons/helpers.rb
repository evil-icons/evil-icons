module EvilIcons
  module Helpers

    def evil_icons
      render "evil_icons/icons"
    end

    def icon(name, options = {})
      options[:class] = "icon icon--#{name} #{options[:class]}"

      content_tag :svg, options do
        tag :use, 'xlink:href' => "##{name}-icon"
      end
    end

  end
end
