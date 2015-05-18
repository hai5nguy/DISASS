var sass = require('node-sass');
var fs = require('fs');

var inputPath = './';
var outputFilePath = './';
var inputFileName = 'test';
var inputFileExt = '.scss';
var outputStyle = "compact";

sass.render({
	file: inputPath + inputFileName + inputFileExt,
	outputStyle: outputStyle
}, function (error, result) {
	if (error) throw error;
	fs.writeFile(outputFilePath + inputFileName + '.css', result.css, function (err) {
		if (err) throw err;
		console.log('saved');
	})
});
