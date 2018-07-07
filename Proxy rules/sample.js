module.exports = {
  summary: 'a rule to hack response',
  *beforeSendResponse(requestDetail, responseDetail) {
    if (requestDetail.url === 'https://dog.ceo/api/breeds/list/all') {
      const newResponse = responseDetail.response;
      newResponse.body += '- AnyProxy Hacked!';

      return new Promise((resolve, reject) => {
        setTimeout(() => { // delay
          resolve({ response: newResponse });
        }, 5000);
      });
    }
  },
};
