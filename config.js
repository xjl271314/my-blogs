const chalk = require("chalk");
const config = require('./private-config');

try{
  console.log('config success!')
}
catch (e) {
  console.log(chalk.red('You are not owner of this project'));
  console.log(chalk.red('If you want use gitalk or google analysis，write configuration options in project-path/private-config.js '));
}

module.exports = config;