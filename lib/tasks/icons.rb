require "evil_icons/generator"

root      = File.expand_path('../../../', __FILE__)
svg_path  = File.join(root, 'app', 'assets', 'images',     'evil-icons')
res_path  = File.join(root, 'app', 'views',  'evil_icons', '_icons.erb')
doc_path  = File.join(root, 'index.html')

namespace :evil_icons do

  desc "Generate SVG icons sprite"
  task :process do
    generator = EvilIcons::Generator.new(svg_path)
    generator.write(res_path, 'icons')
    generator.write(doc_path, 'index')
  end

end
