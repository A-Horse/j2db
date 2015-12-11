'use strict';

let R = require('ramda');

let str = require('./lib/str');



let getArgvs = () => process.argv.slice(2);

let outPutUsage = () => {
    str.outPut('Usage:');
};

let main = () => {

    let argv = getArgvs();
    
    {
        let length = argv.length;
        if ( length <= 3 || length >= 4  ) {
            outPutUsage();
        }
    }
    
    
    
    
    
    
};

main();


