[![Circle CI](https://circleci.com/gh/outpunk/evil-icons.svg?style=svg)](https://circleci.com/gh/outpunk/evil-icons)

![](http://evil-icons.io/assets/images/evil-icons.png)

Free ‘plug and play’ set of SVG icons designed specifically for web projects. Available as a Ruby gem, a Node.js package and Grunt/Gulp plugins. Just use icon names with your templates and styles — and all the rest will be done automagically.

[evil-icons.io](http://evil-icons.io)

Made by [Alexander Madyankin] and [Roman Shamin].

<a href="https://evilmartians.com/?utm_source=evil-icons">
<img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg" alt="Sponsored by Evil Martians" width="236" height="54">
</a>

[Alexander Madyankin]:  https://twitter.com/outpunk
[Roman Shamin]:         https://twitter.com/romanshamin

## Usage

* [Supported browsers](#supported-browsers)
* [Grunt](#grunt)
* [Gulp](#gulp)
* [CDN](#cdn)
* [Rails](#rails)
* [Sinatra](#sinatra)
* [Middleman](#middleman)
* [npm](#npm)
* [React](#react)
* [Styling](#styling)

### Supported browsers
We support IE 9+, Firefox, Chrome, Safari (desktop and mobile), Opera, Android 4+.
http://caniuse.com/#search=inline%20svg

### Grunt
Use the [Grunt plugin].
[Grunt plugin]: https://github.com/outpunk/grunt-evil-icons

### Gulp
Use the [Gulp plugin].
[Gulp plugin]: https://github.com/outpunk/gulp-evil-icons

### CDN

Just include the assets into your page from CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/evil-icons/1.8.0/evil-icons.min.css">
<script src="https://cdn.jsdelivr.net/evil-icons/1.8.0/evil-icons.min.js"></script>
```


And use the icons like this:

```html
<div data-icon="ei-archive"></div>
<div data-icon="ei-chart" data-size="s"></div>
<div data-icon="ei-check" data-size="m"></div>
<div data-icon="ei-spinner" data-size="m"></div>
<div data-icon="ei-cart" data-size="l" class="foo"></div>
```

### Rails

Add the `'evil_icons'` gem to your Gemfile:
```ruby
gem 'evil_icons'
```

Add the Evil Icons require to your `application.css`:
```css
/*
 *= require evil-icons
 */
```

Next, you have to render the evil-icons sprite in your template (or, in your layout):
```erb
<%= evil_icons_sprite %>
```

Finally, you can render the icon using the `evil_icon` helper.
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

Finally, you can render the icon using the `evil_icon` helper.
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

Finally, add the Evil Icons require to your `application.css`:
```css
/*
 *= require evil-icons
 */
```

Also, you can take a look at [example app] by [@aderyabin].
[example app]: https://github.com/aderyabin/evil_icons_sinatra_example/
[@aderyabin]: https://github.com/aderyabin


### Middleman

Add the `'evil_icons'` gem to your Gemfile:
```ruby
gem 'evil_icons'
```

Add the Evil Icons require to your main css file eg.
`source/stylesheets/styles.css``:

```css
/*
 *= require evil-icons
 */
```

Add following to your `config.rb` to register Evil Icons helpers:

```ruby
require 'evil_icons'
helpers EvilIcons::Helpers

after_configuration do
  sprockets.append_path(EvilIcons.assets_dir)
end
```

Next, you have to render evil-icons sprite in your layout similar to the
[Rails usage](#rails):

```erb
<%= evil_icons_sprite %>
```

And finally `evil_icon` helper renders icons just like with the [Rails](#rails):

```erb
<%= evil_icon 'ei-search' %>
<%= evil_icon 'ei-arrow-right', size: :m %>
<%= evil_icon 'ei-envelope', size: :l, class: "custom-class" %>
```


## npm

Add the `'evil-icons'` package to your project:
```bash
npm install evil-icons
```

Add the Evil Icons styles to your pages:
```html
<link rel="stylesheet" type="text/css" href="./node_modules/evil-icons/assets/evil-icons.css">
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

### React
Use the [React component](https://github.com/saulhoward/react-evil-icons).

### Styling

Every icon has the `.icon` class and its modifier including the icon name. For example, the Facebook icon has the `.icon--ei-sc-facebook` modifier.

Also, an icon may have a size modifier. But we do recommend to change the size using helper's `size` parameter instead. Evil Icons have some predefined sizes: `s` (25x25, default), `m` (50×50), `l` (100×100), `xl` (150×150) and `xxl` (200×200). You may want to add more sizes, we recommend keeping the sizes multiple to 25.
```js
icons.icon("ei-arrow-right", {size: "m"})
```

Also, you may want to add a custom class for an icon.
You can do this using the `class` parameter:
```js
icons.icon("ei-envelope", {class: "custom-class"})
```

An icon's color can be changed in CSS:
```css
.icon {
  fill: green;
}
.icon--ei-sc-facebook {
  fill: blue;
}
```


## Roadmap
* Custom icons
* More styles
