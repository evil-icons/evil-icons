root_dir = File.expand_path(File.dirname(File.dirname(File.dirname(__FILE__))))
Sprockets.append_path File.join(root_dir, "app", "assets", 'images')
Sprockets.append_path File.join(root_dir, "app", "assets", 'stylesheets')
