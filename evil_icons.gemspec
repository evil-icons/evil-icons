# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'evil_icons/version'

Gem::Specification.new do |spec|
  spec.name          = "evil_icons"
  spec.version       = EvilIcons::VERSION
  spec.authors       = ["Alexander Madyankin", "Roman Shamin"]
  spec.email         = ["alexander@madyankin.name"]
  spec.summary       = "SVG icons for rails."
  spec.description   = "SVG icons for rails."
  spec.homepage      = ""
  spec.license       = "MIT"

  spec.files         = Dir.glob("{app,lib}/*/**/**") + %w(
                        evil_icons.gemspec
                        LICENSE.txt
                        Rakefile
                        README.md
                       )

  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "rails", ">= 3.1"
  spec.add_dependency "nokogiri"
  spec.add_dependency "svg_optimizer"

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
