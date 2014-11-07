require "nokogiri"
require "svg_optimizer"
require "erb"

module EvilIcons

  class Generator
    def initialize(svg_path)
      @svg_path       = svg_path
      @templates_dir  = File.expand_path('../../templates', __FILE__)
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

    def icons
      files.map do |name|
        file        = read_svg(name)
        optimized   = SvgOptimizer.optimize(file)
        doc         = Nokogiri::HTML::DocumentFragment.parse(optimized)

        svg         = doc.at_css('svg')
        viewbox     = svg['viewbox']
        g           = svg.search('g')
        container   = g.empty? ? svg : g

        shape       = container.children.map {|c| c.to_s}.join('')
        name        = File.basename(name, '.svg')

        { name: name, viewbox: viewbox, shape: shape }
      end
    end

    def sprite(template)
      view  = File.read File.join(@templates_dir, "#{template}.erb")
      ERB.new(view).result(binding)
    end

    def write(sprite_path, template)
      file = File.new(sprite_path, 'w')
      file.write sprite(template)
      file.close
    end

  end

end
