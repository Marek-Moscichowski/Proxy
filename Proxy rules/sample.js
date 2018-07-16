module.exports = {
  summary: 'a rule to hack response',
  // *beforeSendRequest(requestDetail) {
  //   var fs = require('fs');
  //   var path = requestDetail.requestOptions.hostname + requestDetail.requestOptions.path
  //   console.log("path = " + path)
  //   if (fs.existsSync(path + "/mock.json")) {
  //     var body = fs.readFileSync(path + "/mock.json");
  //     var jsonBody = JSON.parse(body)
  //     return {
  //     response: {
  //       statusCode: 200,
  //       header: { 'content-type': 'application/json' },
  //       body: JSON.stringify(jsonBody)
  //       }
  //     } 
  //   } else {
  //     return null;
  //   }
  //  },
  *beforeSendResponse(requestDetail, responseDetail) {
    // console.log(Object.keys(requestDetail))
    // console.log(Object.keys(responseDetail))
    var helper = require('./helper')
    // console.log("request " + helper.log(requestDetail))
    // console.log("response " + responseDetail.response.body.toString('utf8'))
    // console.log("Req");
    // // helper.log(requestDetail)
    // console.log("Response");
    
    var save = require('./saveResponse');
    save.save(requestDetail, responseDetail.response)
    // console.log("Zaloguje sie?");
      
      const newResponse = responseDetail.response;
      // newResponse.body += '- AnyProxy Hacked!';

      // console.log("response " + helper.log(newResponse.body))

      return new Promise((resolve, reject) => {
        resolve({ response: newResponse });
      });
  },
};