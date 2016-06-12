// Load the fs (filesystem) module
var dir = require('node-dir');

module.exports.get_files = find_all_files;

function find_all_files (base_dir) {
	console.log('Using directory', base_dir);
   	dir.paths(base_dir,  function(error, paths){
   		if (error) { 
    		throw error;
    	} else {
	    	//console.log('files:\n',paths.files);
	    	console.log('Found', paths.files.length, 'files');
	    	var total = paths.files.length,
		    count = 0,
		    pace = require('pace')(total);

			while (count++ < total) {
			  pace.op();

			  // Cause some work to be done.
			  for (var i = 0; i < 100000; i++) {
			    count = count;
			  }
			}
	    }
   	});
}
