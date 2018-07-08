var saveResponse = require('./saveResponse')
var obj = {
	"hostname": "test.com",
	"path": "/dog/sheep/terefere",
	"response": {
		"body": "body blows"
	}
}

var fs = require("fs");
console.log("\n *START* \n");
var requestString = fs.readFileSync("request");
var responseString = fs.readFileSync("response");
// console.log("Output Content : \n"+ requestString);
console.log("\n *EXIT* \n");
var request = JSON.parse(requestString)
var response = JSON.parse(responseString)
// var logo = require('./helper')
// logo.saveToFile("dupa", obj)
saveResponse.save(request, response)