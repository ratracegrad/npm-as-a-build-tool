var app = module.exports = require("koa")();

app.use(function *(){
	this.body = "Hello World";
});

var port = process.env.PORT || (process.argv[2] || 3000);

if (!module.parent) {
	app.listen(port);
}
console.log("Application started. Listening on port:" + port);