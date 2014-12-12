![](http://evil-icons.io/assets/images/social.png)

Free ‘plug and play’ set of SVG icons designed specifically for web projects. Available as a Node.js package or a Ruby gem (for Rails). Just use icon names with your templates and styles — and all the rest will be done automagically.

[evil-icons.io](http://evil-icons.io)

Made by [Alexander Madyankin] and [Roman Shamin].

<a href="https://evilmartians.com/?utm_source=evil-icons">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a>

[Alexander Madyankin]:  http://madyankin.name
[Roman Shamin]:         https://twitter.com/romanshamin


## Usage

### Rails

Add the `'evil_icons'` gem to your Gemfile:
```ruby
gem 'evil_icons'
```

Add the Evil Icons require to your `application.css`:
```css
//= require evil-icons
```

Next, you have to render the evil-icons sprite in your template (or, in your layout):
```erb
<%= evil_icons_sprite %>
```

Finally, you can render the icon using the `icon` helper.
Here are some examples:
```erb
<%= evil_icon 'ei-search' %>
<%= evil_icon 'ei-arrow-right', size: :m %>
<%= evil_icon 'ei-envelope', size: :l, class: "custom-class" %>
```


### Sinatra

Add the `'evil_icons'` gem to your Gemfile:
```ruby
gem 'evil_icons'
```
And require it:
```
require 'evil_icons'
```

Add the helpers to your application:
```ruby
helpers EvilIcons::Helpers
```

Next, you have to render the evil-icons sprite in your template (or, in your layout):
```erb
<%= evil_icons_sprite %>
```

Finally, you can render the icon using the `icon` helper.
Here are some examples:
```erb
<%= evil_icon 'ei-search' %>
<%= evil_icon 'ei-arrow-right', size: :m %>
<%= evil_icon 'ei-envelope', size: :l, class: "custom-class" %>
```

In order to use the stylesheets, you have to add Sprockets to your application.
Add `sinatra-asset-pipeline` to your Gemfile:
```ruby
gem 'sinatra-asset-pipeline'
```

And register it:
```ruby
require 'sinatra/asset_pipeline'
register Sinatra::AssetPipeline
```

Finally, add the evil icons require to your `application.css`:
```css
//= require evil-icons
```

Also, you can take a look at [example app] by [@aderyabin].
[example app]: https://github.com/aderyabin/evil_icons_sinatra_example/
[@aderyabin]: https://github.com/aderyabin


## npm

Add the `'evil-icons'` package to your project:
```bash
npm install evil-icons
```

Add the Evil Icons styles to your pages:
```html
<link rel="stylesheet" type="text/css" href="./node_modules/evil-icons/assets/css/evil-icons.css">
```

Require `evil-icons` in your JavaScript code:
```js
var icons = require("evil-icons")
```

Finally, you can render the icons in your page using helpers.
Here are some examples:
```js
/* A string with SVG sprite */
icons.sprite;

/* Icons rendering */
icons.icon("ei-search");
icons.icon("ei-arrow-right", {size: "m"});
icons.icon("ei-envelope", {size: "l", class: "custom-class"});
```


### Styling

Every icon has the `.icon` class and its modifier including the icon name. For example, the facebook icon has the `.icon--ei-facebook` modifier.

In addition, an icon may have a size modifier. But we do recommend to change the size using helper's `size` parameter instead. Evil Icons have some predefined sizes: `s` (25x25, default), `m` (50×50), `l` (100×100), `xl` (150×150) and `xxl` (200×200). You may want to add more sizes, we recommend to keep the sizes multiple to 25.
```js
icons.icon("ei-arrow-right", {size: "m"})
```

Also you may want to add a custom class for an icon.
You can do this using the `class` parameter:
```js
icons.icon("ei-envelope", {class: "custom-class"})
```

An icon's color can be changed in CSS:
```css
.icon {
  fill: green;
}
.icon--ei-facebook {
  fill: blue;
}
```


## Roadmap
* Custom icons
* Sketch file for designers
* Grunt plugin
* Gulp plugin
* CDN version
* More styles
