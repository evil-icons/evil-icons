require "evil_icons"
require "evil_icons/generator"
require "uglifier"
require 'csso'

svg_path = EvilIcons.images_dir

namespace :evil_icons do

  desc "Generate SVG icons sprite"
  task :process => [:normalize_filenames, :optimize] do
    generator = EvilIcons::Generator.new(svg_path)
    generator.generate("sprite.svg")
    generator.generate("evil-icons.js")
    Rake::Task["evil_icons:minimize"].invoke
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

  desc "Optimize SVG"
  task :optimize do
    system "svgo -f #{svg_path} --disable=mergePaths"
  end

  desc "Minimize assets"
  task :minimize do
    source_js   = File.join(EvilIcons.assets_dir, "evil-icons.js")
    compiled_js = File.join(EvilIcons.assets_dir, "evil-icons.min.js")

    f = File.new(compiled_js, "w")
    f.write Uglifier.compile(File.read(source_js))
    f.close

    source_css   = File.join(EvilIcons.assets_dir, "evil-icons.css")
    compiled_css = File.join(EvilIcons.assets_dir, "evil-icons.min.css")

    f = File.new(compiled_css, "w")
    f.write Csso.optimize(File.read(source_css))
    f.close
  end

  desc "Publish packages"
  task :publish do
    # gem
    gem_file = "evil_icons-#{ EvilIcons::VERSION }.gem"
    system "gem build evil_icons.gemspec"
    system "gem push #{ gem_file }"
    system "rm #{ gem_file }"

    # npm
    system "npm publish ./"
  end

end
