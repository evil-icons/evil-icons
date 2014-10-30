require "nokogiri"
require "svg_optimizer"

module EvilIcons

  class Generator
    def initialize(svg_path)
      @svg_path = svg_path
    end

    def files
      @_files ||= begin
        Dir.entries(@svg_path).select { |f| File.extname(f) == '.svg' }
      end
    end

    def read_svg(filename)
      file = File.join(@svg_path, filename)
      File.read(file)
    end

    def sprite
      icons = files.map do |name|
        file        = read_svg(name)
        optimized   = SvgOptimizer.optimize(file)
        doc         = Nokogiri::HTML::DocumentFragment.parse(optimized)

        svg         = doc.at_css('svg')
        viewbox     = svg['viewbox']
        g           = svg.search('g')
        container   = g.empty? ? svg : g

        shape       = container.children.map {|c| c.to_s}.join('')
        id          = File.basename(name, '.svg')

        "\n\t<symbol id='#{id}-icon' viewBox='#{viewbox}'>\n\t\t#{shape}\n\t</symbol>"
      end

      layout icons.join("\n")
    end

    def banner
      "<% # This file was automatically generated. Change it only by running rake evil_icons:process %>\n\n"
    end

    def layout(icons)
      svg = banner
      svg << '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">'
      svg << icons
      svg << "\n</svg>"
    end

    def write_svg(sprite_path)
      file = File.new(sprite_path, 'w')
      file.write(sprite)
      file.close
    end

  end

end
