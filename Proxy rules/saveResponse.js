module.exports = {
	test() {
		console.log("testing shiiit")
	},
	save(request, response) {
		var helper = require('./helper')
		// var logme = helper.log(response.response.body)
		// const newResponse = response.response;
      	// newResponse.body += '- AnyProxy Hacked!';


		let bufferOne = Buffer.from('This is a buffer example.');
		console.log("buffer = " + JSON.parse(response.body.toString('utf8')).status)
		// var StringDecoder = require('string_decoder').StringDecoder;
		// var decoder = new StringDecoder('utf8');
		// var logogo = decoder.write(response.response.body)
  //     	console.log("response " + logogo)//response.response.body.toString('utf8'))
		// helper.log(response)
		var mkdirp = require('mkdirp');
		var fullPath = request.requestOptions.hostname + request.requestOptions.path
		console.log("full = " + request.requestOptions.hostname + " " + request.requestOptions.path)
		mkdirp(fullPath, function(err) { 
			var fs = require('fs');
			var json = JSON.parse(response.body.toString('utf8'))
			fs.writeFile(fullPath + "/mock.json", JSON.stringify(json, null, 4), function(err) {
      		if(err) {
        		return console.log(err);
      		}

      		console.log("The file was saved!");
      	});
		console.log("inside bitch")
    	// path exists unless there was an error
	});
	},
	savedResponse(path) {
		var fs = require('fs');
		fs.readFileSync("request");
	}
}

console.log("gogo")