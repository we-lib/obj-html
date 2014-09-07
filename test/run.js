var fs = require('fs')
var path = require('path')
var assert = require('assert')
var _ = require('underscore')
var parseHtml = require('..')

var htmlObj = require('./dom.js')
var expected = readFile('./expected.html')

runTest()

function runTest(){
  var html = parseHtml(htmlObj)
  assert(html === expected)
  console.log('test passed')
}

function readFile(file){
  file = path.resolve(__dirname, file)
  return fs.readFileSync(file).toString()
}