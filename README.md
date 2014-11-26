# Evil Icons

Evil Icons is a set of SVG icons designed extensively for using in modern web projects. You can use it as-is, or try a Ruby gem (for Ruby on Rails) or a npm package. See the icons [here](http://evil-icons.io).

Made by [Alexander Madyankin] and [Roman Shamin]. Sponsored by [Evil Martians].

[Alexander Madyankin]:  https://github.com/outpunk
[Roman Shamin]:         https://github.com/romashamin
[Evil Martians]:        https://evilmartians.com


## Usage

### Rails

Add the `'evil_icons'` gem to your Gemfile:
```ruby
gem 'evil_icons'
```

Add the evil icons require to your `application.css`:
```css
/*= require evil-icons */
```

Next, you have to render the evil-icons sprite in your template (or, in your layout):
```erb
<%= evil_icons %>
```

Finally, you can render the icon using the `icon` helper.
Here are some examples:
```erb
<%= icon 'ei-search' %>
<%= icon 'ei-arrow-right', size: :m %>
<%= icon 'ei-envelope', size: :l, class: "custom-class" %>
```


## npm

Add the `'evil-icons'` package to your project:
```bash
npm install evil-icons
```

Add the evil icons styles to your pages:
```html
<link rel="stylesheet" type="text/css" href="./node_modules/evil-icons/app/assets/stylesheets/evil-icons.css">
```

Require `evil-icons` in your JavaScript code:
```js
var icons = require("evil-icons").icons
```

Finally, you can render the icons in your page using helpers.
Here are some examples:
```js
/* A string with SVG sprite */
icons.sprite;

/* Icons rendering */
icon("ei-search");
icon("ei-arrow-right", {size: "m"});
icon("ei-envelope", {size: "l", class: "custom-class"});
```

### Styling

Every icon has the `.icon` class and its modifier including the icon name.
For example, the facebook icon has the `.icon--ei-facebook` modifier.

In addition, an icon may have a size modifier. But we do recommend to change the size using helper's `size` parameter instead. Evil icons have some predefined sizes: `s` (25x25, default), `m` (50x50), , `l` (100x100), `xl` (150x150) and `xxl` (200x200). You may want to add more sizes, we recommend to keep the sizes multiple to 50.
```js
icon("ei-arrow-right", {size: "m"})
```

Also you may want to add a custom class for an icon.
You can do this using the `class` parameter:
```js
icon("ei-envelope", {class: "custom-class"})
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
* PSD/AI/Sketch for designers
* Grunt plugin
* Gulp plugin
* CDN version
* More styles
