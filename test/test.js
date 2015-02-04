var lowercaseImgs = require('../lib/rename-images-to-lowercase.js');
var ncp           = require('ncp').ncp;
var async         = require('async');

// function forEachFileInDir(dirName, callback) {
//     console.log('forEachFileInDir: ' + dirName);
//     fs.readdir(dirName, function (err, fileNames) {
//         console.log('read');
//         if (err) { console.log('ERROR:', err); }
//         fileNames.forEach(function (fileName) {
//             callback(dirName + '/' + fileName);
//         })
//     });
// }

// function setupTestFixturesAndThen (callback) {
//     console.log('setupTestFixturesAndThen');
//     ncp('test/renamingFilesSrc', 'test/renamingFiles', function (err) {
//         if (err) { return console.error(err); }
//         callback();
//     });
// }

// function fileIsAnImage (filePath) {
//     return ['jpg', 'gif', 'png'].indexOf(filePath.split('.')[1]) > -1;
// }

// function setupTestFixtures (callback) {
//     console.log('setupTestFixturesAndThen');
//     ncp('test/renamingFilesSrc', 'test/renamingFiles', function (err) {
//         if (err) { return console.error(err); }
//         callback();
//     });
// }

// function getFilesInDirectory (callback) {
//     fs.readdir(dirName, function (err, fileNames) {
//         console.log('getFilesInDirectory');
//         if (err) { console.log('ERROR:', err); }
//         callback(fileNames);
//     });
// }

module.exports = {
    testRenamingFiles: function (test) {
        test.expect(3);
        // setupTestFixturesAndThen(function () {
        //     lowercaseImgs('renamingFiles');
        //     forEachFileInDir(__dirname + '/renamingFiles', function (filePath) {
        //         console.log('loop');
        //         if (fileIsAnImage(filePath)) {
        //             test.ok(filePath === filePath.toLowerCase());
        //             console.log(filePath + ': ' + (filePath === filePath.toLowerCase()));
        //         }
        //     });
        //     // test.done();
        // });

        // function testAssertion (fileName) {
        //     if (fileIsAnImage(filePath)) {
        //         test.ok(filePath === filePath.toLowerCase());
        //     }
        // }
        // async.waterfall([
        //     function () {
        //         ncp('test/renamingFilesSrc', 'test/renamingFiles');
        //     },
        //     function () {
        //         getFilesInDirectory(function (fileNames) {
        //             lowercaseImgs('renamingFiles');
        //             async.each(fileNames, testAssertion);
        //         });
        //     },
        //     function () {
        //         test.done();
        //     }
        // ]);

        async.waterfall([function () {
            console.log(1);
        },function () {
            console.log(2);
        },function () {
            console.log(3);
        }], function () {
            console.log('finished');
        });
    }
};