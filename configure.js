var yaml = require('js-yaml');
var fs = require('fs');
var rc = require('rc');

var config = yaml.safeLoad(fs.readFileSync('config.yaml', 'utf8'));
// overwrite from environment
rc('sinopia', config);

// variables with special chars
if(config._extra) {

  for(let extra in config._extra) {

    config._extra[extra] = JSON.parse(config._extra[extra]);
    config[extra] = Object.assign(config[extra], config._extra[extra]);
  }
}

fs.writeFileSync('run.yaml', yaml.safeDump(config), 'utf8');
