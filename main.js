'use strict';

/**
 * A simple main class to show case the uniqueArray utility
 * function working with simple array input from a file
 * Specifically not included in tests as not designed to be final product, just a showcase for human input, assume modules already fully tested
 */

var utilities = require('./app/utilities'); //Reference the utility class
var fs = require("fs"); //Require nodes file system module
var argv = require('yargs') //Use the yargs module to accept a file path as an argument
        .option('f', {
            alias: 'file',
            demand: false,
            default: './tests/files/test'
        })
        .argv;

// Asynchronous read
fs.readFile(argv.file, function (err, data) { //Read the file
    if (err) {
        return console.error(err); //Log an error if there is an issue with the file
    }
    console.log(utilities.uniqueArray(JSON.parse('['+data.toString()+']'))); //Use the uniqueArray utility (wrapped in array for parsing) and log the result
});


