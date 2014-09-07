module.exports = [
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
            'attrs': {
              'rel': 'stylesheet',
              'href': 'style.css'
            }
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