var fs  = require('fs');

function forEachFileInDir(dirName, callback) {
    fs.readdir(dirName, function (err, fileNames) {
        if (err) { console.log('ERROR:', err); }
        fileNames.forEach(function (fileName) {
            callback(dirName + '/' + fileName);
        });
    });
}

module.exports = function (outputDir) {
	forEachFileInDir(outputDir, function (pathToFile) {
        fs.renameSync(pathToFile, pathToFile.toLowerCase());
    });
}