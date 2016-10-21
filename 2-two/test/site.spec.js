var app = require("../");
var request = require("supertest").agent(app.listen());

describe("Our amazing site", function () {
	it("has a nice welcoming message", function (done) {
		request
			.get("/")
			.expect("Hello World")
			.end(done)
	});
});