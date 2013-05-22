should = require 'should'
fresher = require '../index'
path = require 'path'

describe 'fresher', ->

  npm_package_name = 'roots'

  it 'should correctly tell you when you not fresh', (done) ->
    path_to_package_json = path.join __dirname, 'not_fresh.json'
    fresher npm_package_name, path_to_package_json, (err, needs_update) ->
      if err
        console.log err
      else
        needs_update.should.be.true
      done()

  it 'should correctly tell you when you are fresh', (done) ->
    path_to_package_json = path.join __dirname, 'fresh.json'
    fresher npm_package_name, path_to_package_json, (err, needs_update) ->
      if err
        console.log err
      else
        needs_update.should.be.false
      done()