module.exports = {
  summary: 'a rule to hack response',
  *beforeSendResponse(requestDetail, responseDetail) {
    // console.log(Object.keys(requestDetail))
    // console.log(Object.keys(responseDetail))
    var helper = require('./helper')
    // console.log("request " + helper.log(requestDetail))
    console.log("response " + responseDetail.response.body.toString('utf8'))
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
        setTimeout(() => { // delay
          resolve({ response: newResponse });
        }, 5000);
      });
  },
};