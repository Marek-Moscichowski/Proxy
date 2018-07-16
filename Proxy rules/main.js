var saveResponse = require('./saveResponse')
var helper = require('./helper')
var obj = {
	"hostname": "test.com",
	"path": "/dog/sheep/terefere",
	"response": {
		"body": "body blows"
	}
}



// var fs = require("fs");
// console.log("\n *START* \n");
// var requestString = fs.readFileSync("request");
// var responseString = fs.readFileSync("response");
// // console.log("Output Content : \n"+ requestString);
// console.log("\n *EXIT* \n");
// var request = JSON.parse(requestString)
// var response = JSON.parse(responseString)
// // var logo = require('./helper')
// // logo.saveToFile("dupa", obj)
// saveResponse.save(request, response)

var url = "test.com/foo/bar?param1=elo&param2=1/2/3"
var result = helper.getQueryParams(url)
console.log("res = " + result)