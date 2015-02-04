#! /usr/bin/env node
// -*- js -*-
'use strict';

var script        = require('./lib/rename-images-to-lowercase.js');
var args          = process.argv.slice(2);
var directoryName = args[0];

script(directoryName);