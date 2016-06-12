// Load the fs (filesystem) module
var config = require('config/config');
var fileiterator = require('lib/fileiterator')

console.log('Calling fileiterator...');
var all_files = fileiterator.get_files(config.directory);


