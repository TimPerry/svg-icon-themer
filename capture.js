var casper = require('casper').create();

casper.start('http://127.0.0.1:8371/', function() {
	casper.captureSelector("captures/540.png", ".fiveFourty");
	casper.captureSelector("captures/720.png", ".sevenTwenty");
	casper.captureSelector("captures/1080.png", ".tenEighty");
});

casper.run();
