'use strict';

let R = require('ramda');

let str = require('./lib/str');



let getArgvs = () => [].slice.call(arguments, 0);

let outPutUsage = () => {
    str.outPut('Usage:');
};

let main = () => {

    let argv = getArgvs();

    let length = argv.length;
    if ( length <= 3 || length >= 4  ) {
        outPutUsage();
    }
    
    
};

main();


