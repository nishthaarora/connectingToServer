/*
* Using the previous example as a guide, create an app that has two web servers.
* One that listens on port 7000 and one that listens on port 7500.
* The one listening on port 7000 will always tell the user something good about themselves.
* The one listening on 7500 will always tell the user something bad about themselves.
* Make sure you create a Github repo and commit this code!

** Bonus **
* Generate the good / bad phrase randomly from a list of predefined phrases
* Use the `twitter` package inside the response to also return a random tweet!
*/

var http = require('http');

const Goodport = 7000;
const Badport = 7500;

var goodRes = ['you are good', 'you are super', 'you are amazing', 'you are a superwomen'];
var badRes = ['you are mean', ' you are bad', ' you are not good'];


var server = http.createServer( function (request ,response){
		var randomValue1 = goodRes[Math.floor(goodRes.length * Math.random())];
		response.end(randomValue1);


});

var server2 = http.createServer( function (request ,response){
		console.log('you contacted 2nd time');

		 var randomValue = badRes[Math.floor(badRes.length * Math.random())];
		 console.log(randomValue);
		response.end(randomValue);

});


server.listen(Goodport, function() {
		console.log('you are a good person 3 ');

})

server2.listen(Badport, function () {
		console.log('you are mean 4 ');
})











