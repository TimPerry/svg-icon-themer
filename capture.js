var casper = require('casper').create();

casper.start('http://127.0.0.1:8371/', function() {
	casper.captureSelector("540.png", ".fiveFourty");
	casper.captureSelector("720.png", ".sevenTwenty");
	casper.captureSelector( "1080.png", ".tenEighty");
});

casper.run();
