var sass = require('node-sass');

sass.render({
	file: './test.scss',
}, function (error, result) {
	console.log('result: \n' + error + '\n ======= \n' + result.css);
});
