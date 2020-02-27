# [Selection] for [Krabby]

[Krabby]: https://krabby.netlify.com
[Selection]: https://simonwep.github.io/selection/

A [Krabby] plugin to make selections with [Selection].

## Installation

Edit your manifest and `fetch` files.

`~/.config/krabby/fetch`

``` sh
fetch https://cdn.jsdelivr.net/npm/@simonwep/selection-js/dist/selection.min.js mouse-selection.js
fetch https://github.com/alexherbo2/krabby-selection/raw/master/scripts/krabby/selection.js krabby/selection.js
fetch https://github.com/alexherbo2/krabby-selection/raw/master/styles/krabby/selection.css krabby/selection.css
```

`~/.config/krabby/manifest/common.json`

``` json
{
  "content_scripts": [
    {
      "js": [
        "packages/mouse-selection.js",
        "packages/krabby/selection.js"
      ],
      "css": [
        "packages/krabby/selection.css"
      ]
    }
  ]
}
```

Run the following in your terminal.

``` sh
cd ~/.config/krabby
make
```

## Usage

Hold <kbd>Control</kbd> or <kbd>Command</kbd>, then click and drag <kbd>Left Mouse</kbd> to make a multi-selection.
