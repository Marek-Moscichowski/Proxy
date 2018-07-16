var expect = require('chai').expect;

describe('parsing', function () {
  it('parse', function () {
    console.log("go")
    var okJson = "{\"test\":\"test2\"}"
    var shitJson = ""
    try {
        a = JSON.parse(okJson);
        b = JSON.parse(shitJson);
    } catch(e) {
    	console.log("shit")
        // alert(e); // error in the above string (in this case, yes)!
    }
    // var json = JSON.parse("{\"test\":\"test2\"}")
    expect(a.test).to.be.equal("test2");
  });
});