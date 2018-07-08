module.exports = {
	log(obj) {
		// Demo: Circular reference

// Note: cache should not be re-used by repeated calls to JSON.stringify.
var cache = [];
var log = JSON.stringify(obj, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Duplicate reference found
            try {
                // If this value does not reference a parent it can be deduped
                return JSON.parse(JSON.stringify(value));
            } catch (error) {
                // discard key if value cannot be deduped
                return;
            }
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
});

cache = null;
return log
}, 

	saveToFile(file, obj) {
		var log = this.log(obj)
		var fs = require('fs');
		fs.writeFile(file, log, function(err) {
      		if(err) {
        		return console.log(err);
      		}

      		console.log("The file was saved!");
      	});
	}
}