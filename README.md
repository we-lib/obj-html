# obj-html

Parse js obj model to html

## Usage

Expected:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>
      My Page
    </title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="box"></div>
    <p>
      Bla bla bla..
      <i class="icon foo"></i>
    </p>
  </body>
</html>
```

Parsing:

```js
var parseHtml = require('obj-html')
var html = parseHtml(htmlObj)
console.log(html)
```

Source:

```js
[
  {
    'tag': '!doctype',
    'attrs': {
      'html': true
    }
  },
  {
    'tag': 'html',
    'children': [
      {
        'tag': 'head',
        'children': [
          {
            'tag': 'meta',
            'attrs': {
              'charset': 'utf-8'
            }
          },
          {
            'tag': 'title',
            'children': [
              'My Page'
            ]
          },
          {
            'tag': 'link',
            'attrs': [
              'rel': 'stylesheet',
              'href': 'style.css'
            ]
          }
        ]
      },
      {
        'tag': 'body',
        'children': [
          {
            'tag': 'div',
            'attrs': {
              'id': 'box'
            }
          },
          {
            'tag': 'p',
            'children': [
              'Bla bla bla..',
              {
                'tag': 'i',
                'attrs': {
                  'class': 'icon foo'
                }
              }
            ]
          }
        ]
      }
    ]
  }
]
```