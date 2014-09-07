var _ = require('underscore')

module.exports = parseHtml

function parseHtml(level, list){
  if (!_.isNumber(level)) {
    list = level
    level = 0
  }

  var html = ''
  
  _.each(list, function(item){
    var block = indent()

    if (_.isString(item)) { // text node
      block += item
      return html += block + '\n'
    }

    block += '<' + item.tag

    if (!_.isEmpty(item.attrs)) {
      _.each(_.pairs(item.attrs), function(pair){
        var key = pair[0]
        var value = pair[1]
        if (value === false) {
          // noop
        } else if (value === true) {
          block += ' ' + key
        } else {
          block += ' ' + key + '="' + value + '"'
        }
      })
    }
    block += '>'

    if (isSingle(item)) {
      block += '\n'
    } else {
      if (!_.isEmpty(item.children)) {
        block += '\n' + parseHtml(level + 1, item.children)
        block += indent()
      }
      block += '</' + item.tag + '>\n'
    }

    html += block
  })

  return _end()

  function indent(){
    return _.times(level, _.constant('  ')).join('')
  }
  function _end(err){
    err = err || null
    // a?sync support
    //if (cb) cb(err, html)
    //else {
      if (err) throw err
      // remove trailing
      if (level === 0) html = html.slice(0, -1)
      return html
    //}
  }
}

var singleTags = [
  '!doctype', 'base', 'meta', 'link',
  'img', 'input', 'br', 'hr', 'param'
]

function isSingle(item){
  return _.contains(singleTags, item.tag)
}