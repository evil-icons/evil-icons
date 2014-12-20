module EvilIcons
  module Helpers

    def evil_icons_sprite
      html_safe File.new(EvilIcons.sprite_file).read
    end

    def evil_icon(name, options = {})
      size  = options[:size] ? "icon--#{options[:size]}" : ''
      options[:class] = "icon icon--#{name} #{size} #{options[:class]}"

      icon = "<svg class='icon__cnt'><use xlink:href='##{name}-icon'/></svg>"

      html_safe "
        <div class='#{options[:class]}'>
          #{wrap_spinner icon, options[:class]}
        </div>
      "
    end


    private

    def wrap_spinner(html, klass)
      if klass.include?("spinner")
        html_safe "<div class='icon__spinner'>#{html}</div>"
      else
        html
      end
    end

    def html_safe(html)
      html.respond_to?(:html_safe) ? html.html_safe : html
    end

  end
end
