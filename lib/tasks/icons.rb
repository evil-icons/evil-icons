require "evil_icons/generator"

root      = File.expand_path('../../../', __FILE__)
svg_path  = File.join(root, 'app', 'assets', 'images',     'evil-icons')
res_path  = File.join(root, 'app', 'views',  'evil_icons', '_icons.erb')
doc_path  = File.join(root, 'index.html')

namespace :evil_icons do

  desc "Generate SVG icons sprite"
  task :process => :normalize_filenames do
    generator = EvilIcons::Generator.new(svg_path)
    generator.write(res_path, 'icons')
    generator.write(doc_path, 'index')
  end


  desc "Normalize filenames"
  task :normalize_filenames do
    filenames = Dir.entries(svg_path).select { |f| File.extname(f) == '.svg' }

    filenames.each do |old_name|
      next unless old_name.include?('_')

      new_name = File.join svg_path, old_name.gsub('_', '-')
      old_name = File.join svg_path, old_name

      File.delete(new_name) if File.exists?(new_name)
      File.rename(old_name, new_name)
    end
  end

end
