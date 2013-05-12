var ajax = require('superagent'),
    fs = require('fs'),
    semver = require('semver');

// @api public
// name (string): name of the package on npm
// path (string): path to project's package.json file
// cb (function): callback function, passes two arguments
//   - err: boolean, if there was an error along the line
//   - fresh: boolean, if the package is fresh or not

module.exports = function(name, path, cb){

  ajax.get('http://registry.npmjs.org/' + name, function(res){
    var error = null;
    if (res.error) error = res.error;
    var latest_version = JSON.parse(res.text)['dist-tags'].latest;

    try {
      var current_version = JSON.parse(fs.readFileSync(path)).version
    } catch(err){
      error = err;
    }

    cb(error, semver.gt(latest_version, current_version))
  });

}