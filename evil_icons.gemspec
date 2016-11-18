# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'evil_icons/version'

Gem::Specification.new do |spec|
  spec.name          = "evil_icons"
  spec.version       = EvilIcons::VERSION
  spec.authors       = ["Alexander Madyankin", "Roman Shamin"]
  spec.email         = ["alexander@madyankin.name"]
  spec.summary       = "Evil Icons is a set of SVG icons for modern web projects"
  spec.description   = "Evil Icons is a set of SVG icons designed extensively for using in modern web projects"
  spec.homepage      = "http://evil-icons.io"
  spec.license       = "MIT"

  spec.files         = Dir.glob("assets/*/**/**") + %w(
                        assets/sprite.svg
                        assets/evil-icons.css
                        assets/evil-icons.js

                        lib/evil_icons.rb
                        lib/evil_icons/engine.rb
                        lib/evil_icons/helpers.rb
                        lib/evil_icons/version.rb

                        evil_icons.gemspec
                        Rakefile

                        LICENSE.txt
                        README.md
                        CHANGELOG.md
                       )

  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "nokogiri",     "~> 1.6"
  spec.add_development_dependency "bundler",      "~> 1.6"
  spec.add_development_dependency "rake",         "~> 10.4"
  spec.add_development_dependency "uglifier",     "~> 2.7.0"
  spec.add_development_dependency "csso-rails",   "~> 0.3.4"
  spec.add_development_dependency "therubyracer", "~> 0.12.2"
end
